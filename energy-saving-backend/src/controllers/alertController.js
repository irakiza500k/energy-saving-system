const db = require("../utils/db");

const getAlerts = async (
  req,
  res
) => {
  try {
    const [devices] = await db.query(
      "SELECT * FROM devices WHERE user_id = ?",
      [req.user.id]
    );

    const alerts = [];

    devices.forEach((device) => {
      if (
        device.status === "ON" &&
        device.power > 1000
      ) {
        alerts.push({
          id: device.id,
          message: `${device.name} is consuming high power`,
        });
      }
    });

    res.json(alerts);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  getAlerts,
};