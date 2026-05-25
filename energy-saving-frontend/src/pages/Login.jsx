import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    try {

      setLoading(true);

      const response = await axios.post(
        "http://localhost:5002/api/auth/login",
        formData
      );

      console.log(response.data);

      localStorage.setItem("token", response.data.token);

      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert("Login successful");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Invalid email or password"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1 className="auth-title">
          Login
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="auth-input"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="auth-input"
            value={formData.password}
            onChange={handleChange}
          />

          <button className="auth-btn">

            {loading ? "Loading..." : "Login"}

          </button>

        </form>

        <div className="auth-link">
          <Link to="/register">
            Create new account
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Login;