import { Link } from "react-router-dom";
import "../styles/landing.css";

function Landing() {
  return (
    <div className="landing">

      <section className="hero">
        <div className="hero-content">
          <h1>Smart Energy Saving System</h1>

          <p>
            Monitor electricity usage, reduce power waste,
            track appliance consumption and manage smart energy
            analytics in real-time.
          </p>

          <div className="hero-btns">
            <Link to="/login">
              <button className="hero-btn yellow-btn">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="hero-btn dark-btn">
                Register
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="features">

        <h2 className="section-title">
          Powerful Features
        </h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>⚡ Real-Time Monitoring</h3>
            <p>
              Monitor your electricity usage instantly.
            </p>
          </div>

          <div className="feature-card">
            <h3>📊 Analytics Dashboard</h3>
            <p>
              Visualize energy consumption statistics.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔔 Smart Alerts</h3>
            <p>
              Get alerts when energy usage exceeds limits.
            </p>
          </div>

          <div className="feature-card">
            <h3>🌍 Eco Friendly</h3>
            <p>
              Reduce environmental impact with optimized usage.
            </p>
          </div>

        </div>
      </section>

      <section className="energy-banner">
        <h2>
          Save Energy. Save Money. Save The Planet.
        </h2>
      </section>

    </div>
  );
}

export default Landing;