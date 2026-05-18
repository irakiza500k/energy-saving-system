import {useEffect,useState} from "react";
import axios from "axios";

function Alerts(){

const [alerts,setAlerts]=useState([]);

const token=
localStorage.getItem("token");

useEffect(()=>{

fetchAlerts();

},[]);

const fetchAlerts=async()=>{

try{

const res=await axios.get(
"http://localhost:5002/api/alerts",
{
headers:{
Authorization:
`Bearer ${token}`
}
}
);

setAlerts(res.data);

}catch(err){

console.log(err);

}

};

return(

<div>

<h1>🔔 Smart Alerts</h1>

{
alerts.length===0?

<p>No alerts</p>

:

alerts.map((alert,index)=>(

<div
key={index}
className={`alert ${alert.type}`}
>

{alert.message}

</div>

))
}

</div>

);

}

export default Alerts;