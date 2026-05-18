const Consumption = require("../models/Consumption");

const Device = require("../models/Device");


// ADD CONSUMPTION
exports.addConsumption = async (req, res) => {
  try {

    const { device_id, hours_used } = req.body;

    // Find device
    const device = await Device.findByPk(device_id);

    if (!device) {
      return res.status(404).json({
        message: "Device not found",
      });
    }

    // Calculate kWh
    const power_used =
      (device.wattage * hours_used) / 1000;

    // Example electricity cost
    const estimated_cost = power_used * 182;

    // Save consumption
    const consumption = await Consumption.create({
      user_id: req.user.id,
      device_id,
      hours_used,
      power_used,
      estimated_cost,
    });

    res.status(201).json({
      message: "Consumption recorded",
      consumption,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};



// GET USER CONSUMPTION
exports.getConsumption = async (req, res) => {
  try {

    const data = await Consumption.findAll({
      where: {
        user_id: req.user.id,
      },
    });

    res.status(200).json(data);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};



// TOTAL POWER USED
exports.getTotalConsumption = async (req, res) => {
  try {

    const data = await Consumption.findAll({
      where: {
        user_id: req.user.id,
      },
    });

    let totalPower = 0;
    let totalCost = 0;

    data.forEach((item) => {
      totalPower += item.power_used;
      totalCost += item.estimated_cost;
    });

    res.status(200).json({
      total_kwh: totalPower,
      estimated_bill: totalCost,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};