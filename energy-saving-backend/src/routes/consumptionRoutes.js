const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  addConsumption,
  getConsumption,
  getTotalConsumption,
} = require("../controllers/consumptionController");


// ADD CONSUMPTION
router.post("/", protect, addConsumption);


// GET ALL CONSUMPTION
router.get("/", protect, getConsumption);


// TOTAL CONSUMPTION
router.get("/total", protect, getTotalConsumption);

module.exports = router;