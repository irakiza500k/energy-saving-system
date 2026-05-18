import { useEffect, useState } from "react";

import axios from "axios";

function AdminDashboard(){

const [data,setData]=useState({});

const token =
localStorage.getItem("token");

useEffect(()=>{

fetchDashboard();

},[]);

const fetchDashboard=async()=>{

try{

const res = await axios.get(

"http://localhost:5002/api/admin/dashboard",

{
headers:{
Authorization:`Bearer ${token}`
}
}

);

setData(res.data);

}catch(err){

console.log(err);

}

};

return(

<div
style={{
padding:"40px",
color:"white"
}}
>

<h1>
🧑‍💼 Admin Dashboard
</h1>

<h2>
{data.message}
</h2>

<div
style={{
marginTop:"30px"
}}
>

<p>
Admin ID:
{data.admin?.id}
</p>

<p>
Role:
{data.admin?.role}
</p>

</div>

</div>

);

}

export default AdminDashboard;