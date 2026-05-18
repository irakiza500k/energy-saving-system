const mysql = require("mysql2");

const db = mysql.createConnection({

host:"localhost",

user:"root",

password:"",

database:"ENERGY_SAVING_SYSTEM"

});

db.connect((err)=>{

if(err){

console.log(
"❌ MySQL Connection Error"
);

console.log(err);

}else{

console.log(
"✅ MySQL Connected"
);

}

});

module.exports = db;