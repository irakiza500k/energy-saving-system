import "../styles/dashboard.css";

function Dashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div className="dashboard">

      <aside className="sidebar">

        <h2>⚡ EnergySys</h2>

        <ul>

          <li>Dashboard</li>
          <li>Analytics</li>
          <li>Devices</li>
          <li>Alerts</li>
          <li>Settings</li>

        </ul>

      </aside>

      <main className="main-content">

        <div className="topbar">

          <h1>
            Welcome {user?.name || "User"}
          </h1>

        </div>

        <div className="cards">

          <div className="card">
            <h3>Total Energy</h3>
            <p>450 kWh</p>
          </div>

          <div className="card">
            <h3>Money Saved</h3>
            <p>$120</p>
          </div>

          <div className="card">
            <h3>Active Devices</h3>
            <p>12</p>
          </div>

          <div className="card">
            <h3>System Status</h3>
            <p>Optimal</p>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;