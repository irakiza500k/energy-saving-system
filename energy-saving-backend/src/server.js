import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/*
===================================
ROUTES
===================================
*/

app.use("/api/auth", authRoutes);

/*
===================================
HOME ROUTE
===================================
*/

app.get("/", (req, res) => {
  res.send("⚡ Energy Saving Backend Running");
});

/*
===================================
SERVER
===================================
*/

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});