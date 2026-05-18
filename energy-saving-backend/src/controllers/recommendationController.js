const db=require("../utils/db");

exports.getRecommendations=(req,res)=>{

const userId=req.user.id;

db.query(

"SELECT * FROM devices WHERE user_id=?",

[userId],

(err,devices)=>{

if(err){

return res.status(500).json(err);

}

const recommendations=[];

devices.forEach(device=>{

if(device.wattage>500){

recommendations.push(
`Reduce usage of ${device.name}`
);

}

if(
device.name
.toLowerCase()
.includes("bulb")
){

recommendations.push(
`Use LED bulbs for ${device.name}`
);

}

});

res.json(recommendations);

}

);

};