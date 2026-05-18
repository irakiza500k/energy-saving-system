const db = require("../utils/db");

exports.getAnalytics = (req,res)=>{

const userId=req.user.id;

const sql="SELECT * FROM devices WHERE user_id=?";

db.query(sql,[userId],(err,devices)=>{

if(err){
return res.status(500).json(err);
}

let totalWatts=0;
let dailyKwh=0;
let monthlyKwh=0;

const breakdown=[];

devices.forEach(device=>{

const watts=device.wattage;
const hours=device.hours_per_day;

totalWatts += watts;

const kwh=(watts*hours)/1000;

dailyKwh += kwh;

breakdown.push({
name:device.name,
kwh:kwh
});

});

monthlyKwh=dailyKwh*30;

const estimatedCost=monthlyKwh*0.25;

res.json({

totalDevices:devices.length,

totalWatts,

dailyKwh:dailyKwh.toFixed(2),

monthlyKwh:monthlyKwh.toFixed(2),

estimatedCost:estimatedCost.toFixed(2),

breakdown

});

});

};