require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const authRoutes = require("./routes/authRoutes");
const deviceRoutes = require("./routes/deviceRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const alertRoutes = require("./routes/alertRoutes");

const app = express();
const server = http.createServer(app);

/* ================= SOCKET IO ================= */

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("⚡ User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ User disconnected");
  });
});

/* ================= MIDDLEWARE ================= */

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

/* ================= ROUTES ================= */

app.get("/", (req, res) => {
  res.json({
    message: "Energy Saving System API Running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/devices", deviceRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/alerts", alertRoutes);

/* ================= ERROR ================= */

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

/* ================= START ================= */

const PORT = process.env.PORT || 5002;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});