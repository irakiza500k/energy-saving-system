const express = require("express");

const router = express.Router();

/* ================= REGISTER ================= */

router.post("/register", async (req, res) => {
  try {
    const { name, email } = req.body;

    res.json({
      message: "User registered successfully",
      user: {
        id: 1,
        name,
        email,
        role: "user",
      },
      token: "fake-jwt-token",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* ================= LOGIN ================= */

router.post("/login", async (req, res) => {
  try {
    const { email } = req.body;

    res.json({
      message: "Login successful",
      user: {
        id: 1,
        name: "Admin",
        email,
        role: "admin",
      },
      token: "fake-jwt-token",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;