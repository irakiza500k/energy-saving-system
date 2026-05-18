import { Link } from "react-router-dom";

import {
  FaBolt,
  FaChartLine,
  FaMicrochip,
  FaBell,
  FaRobot,
} from "react-icons/fa";

function Sidebar() {

  return (
    <div className="sidebar">

      <h2 className="logo">
        ⚡ EnerSave
      </h2>

      <div className="menu">

        <Link to="/dashboard">
          <FaBolt /> Dashboard
        </Link>

        <Link to="/devices">
          <FaMicrochip /> Devices
        </Link>

        <Link to="/analytics">
          <FaChartLine /> Analytics
        </Link>

        <Link to="/alerts">
          <FaBell /> Alerts
        </Link>

        <Link to="/recommendations">
          <FaRobot /> AI Tips
        </Link>

      </div>

    </div>
  );
}

export default Sidebar;