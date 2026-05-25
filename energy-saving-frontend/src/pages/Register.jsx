import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Register() {

  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{

      await axios.post(
        "http://localhost:5002/api/auth/register",
        formData
      );

      alert("Registered successfully");

      navigate("/login");

    }catch(err){
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1 className="auth-title">
          Register
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="auth-input"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="auth-input"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="auth-input"
            onChange={handleChange}
          />

          <button className="auth-btn">
            Register
          </button>

        </form>

        <div className="auth-link">
          <Link to="/login">
            Already have account?
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Register;