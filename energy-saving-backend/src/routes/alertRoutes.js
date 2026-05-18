const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json([
      {
        id: 1,
        title: "High Power Usage",
        message: "Living room AC is consuming too much energy.",
        level: "warning",
      },
      {
        id: 2,
        title: "Energy Saving Tip",
        message: "Turn off devices during the night.",
        level: "info",
      },
    ]);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;