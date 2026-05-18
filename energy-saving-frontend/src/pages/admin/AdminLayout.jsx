import { Outlet, Link } from "react-router-dom";

function AdminLayout() {
  return (
    <div style={{ display: "flex" }}>

      <div style={{
        width: "250px",
        background: "#0f172a",
        height: "100vh",
        padding: "20px",
        color: "white"
      }}>

        <h2>🧑‍💼 Admin Panel</h2>

        <Link to="/admin" style={{ display: "block", margin: "10px 0" }}>
          Dashboard
        </Link>

        <Link to="/admin/users" style={{ display: "block" }}>
          Users
        </Link>

      </div>

      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>

    </div>
  );
}

export default AdminLayout;