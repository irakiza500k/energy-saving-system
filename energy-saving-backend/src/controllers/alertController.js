const db = require("../utils/db");

exports.getAlerts = (req,res)=>{

const userId=req.user.id;

const sql=
"SELECT * FROM devices WHERE user_id=?";

db.query(sql,[userId],(err,devices)=>{

if(err){
return res.status(500).json(err);
}

const alerts=[];

let totalDaily=0;

devices.forEach(device=>{

const kwh=
(device.wattage*device.hours_per_day)/1000;

totalDaily+=kwh;

if(device.wattage>1000){

alerts.push({
type:"warning",
message:
`${device.name} uses unusually high power`
});

}

if(
device.status==="ON" &&
device.hours_per_day>10
){

alerts.push({
type:"danger",
message:
`${device.name} stayed ON for long periods`
});

}

});

if(totalDaily>15){

alerts.push({

type:"danger",

message:
"Daily usage exceeded 15kWh"

});

}

res.json(alerts);

});

};