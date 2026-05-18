const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

const Device = sequelize.define("Device", {
  device_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  wattage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "OFF",
  },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Device;