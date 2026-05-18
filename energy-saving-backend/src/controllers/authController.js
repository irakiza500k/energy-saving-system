const db = require("../utils/db");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");


/* =========================
   REGISTER
========================= */

exports.register = async (req,res)=>{

try{

const {
name,
email,
password
}=req.body;

if(
!name ||
!email ||
!password
){

return res.status(400).json({
message:"All fields required"
});

}

/* CHECK USER */

db.query(

"SELECT * FROM users WHERE email=?",

[email],

async(err,results)=>{

if(err){

console.log(err);

return res.status(500).json({
message:"Database error"
});

}

if(results.length>0){

return res.status(400).json({
message:"Email already exists"
});

}

/* HASH PASSWORD */

const hashedPassword =
await bcrypt.hash(password,10);

/* INSERT USER */

db.query(

"INSERT INTO users(name,email,password,role) VALUES(?,?,?,?)",

[
name,
email,
hashedPassword,
"user"
],

(err,result)=>{

if(err){

console.log(err);

return res.status(500).json({
message:"Registration failed"
});

}

res.status(201).json({

success:true,

message:"User registered successfully"

});

}

);

}

);

}catch(error){

console.log(error);

res.status(500).json({
message:"Server error"
});

}

};



/* =========================
   LOGIN
========================= */

exports.login = (req,res)=>{

const {
email,
password
}=req.body;

if(
!email ||
!password
){

return res.status(400).json({
message:"All fields required"
});

}

db.query(

"SELECT * FROM users WHERE email=?",

[email],

async(err,results)=>{

if(err){

console.log(err);

return res.status(500).json({
message:"Database error"
});

}

if(results.length===0){

return res.status(401).json({
message:"User not found"
});

}

const user = results[0];

const match =
await bcrypt.compare(
password,
user.password
);

if(!match){

return res.status(401).json({
message:"Incorrect password"
});

}

/* JWT TOKEN */

const token = jwt.sign(

{
id:user.id,
role:user.role
},

process.env.JWT_SECRET,

{
expiresIn:"7d"
}

);

res.json({

success:true,

message:"Login successful",

token,

user:{
id:user.id,
name:user.name,
email:user.email,
role:user.role
}

});

}

);

};