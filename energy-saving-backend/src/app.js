const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const deviceRoutes = require("./routes/deviceRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    message: "API working successfully"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/devices", deviceRoutes);

module.exports = app;