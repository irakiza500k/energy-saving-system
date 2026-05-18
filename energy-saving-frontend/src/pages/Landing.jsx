import { Link } from "react-router-dom";
import "../styles/landing.css";

export default function Landing() {
  return (
    <div className="landing">
      <div className="overlay"></div>

      <div className="landing-content">
        <h1>
          ⚡ Smart Energy Saving System
        </h1>

        <p>
          Monitor, reduce and optimize your electricity usage in real time.
        </p>

        <div className="landing-buttons">
          <Link to="/login">
            <button className="login-btn">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="register-btn">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}