const db = require("../utils/db");

/* GET DEVICES */

const getDevices = async (req, res) => {
  try {
    const [devices] = await db.query(
      "SELECT * FROM devices WHERE user_id = ?",
      [req.user.id]
    );

    res.json(devices);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

/* ADD DEVICE */

const addDevice = async (req, res) => {
  try {
    const { name, power } = req.body;

    await db.query(
      `
      INSERT INTO devices
      (user_id, name, power, status)
      VALUES (?, ?, ?, ?)
      `,
      [req.user.id, name, power, "OFF"]
    );

    res.json({
      message: "Device added",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

/* TOGGLE DEVICE */

const toggleDevice = async (req, res) => {
  try {
    const { id } = req.params;

    const [devices] = await db.query(
      "SELECT * FROM devices WHERE id = ?",
      [id]
    );

    if (devices.length === 0) {
      return res.status(404).json({
        message: "Device not found",
      });
    }

    const currentStatus = devices[0].status;

    const newStatus =
      currentStatus === "ON"
        ? "OFF"
        : "ON";

    await db.query(
      "UPDATE devices SET status = ? WHERE id = ?",
      [newStatus, id]
    );

    res.json({
      message: "Device updated",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

/* DELETE DEVICE */

const deleteDevice = async (req, res) => {
  try {
    const { id } = req.params;

    await db.query(
      "DELETE FROM devices WHERE id = ?",
      [id]
    );

    res.json({
      message: "Device deleted",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  getDevices,
  addDevice,
  toggleDevice,
  deleteDevice,
};