import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "energy_saving_system"
});

db.connect((err) => {
  if (err) {
    console.log("❌ Database connection failed");
    console.log(err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

export default db;