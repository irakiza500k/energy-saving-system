import { Link } from "react-router-dom";

export default function Dashboard() {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "40px",
      }}
    >
      <h1>
        Welcome, {user.name}
      </h1>

      <p
        style={{
          marginTop: "20px",
          color: "#94a3b8",
        }}
      >
        You have no devices yet.
      </p>

      <Link to="/devices">
        <button
          style={{
            marginTop: "30px",
            width: "220px",
            height: "60px",
            border: "none",
            borderRadius: "12px",
            background: "#00ffe0",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Add First Device
        </button>
      </Link>
    </div>
  );
}