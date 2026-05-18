const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json({
      totalConsumption: 425,
      todayConsumption: 32,
      activeDevices: 6,
      monthlyBill: 120,
      savings: 18,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;