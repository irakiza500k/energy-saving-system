const { DataTypes } = require("sequelize");

const { sequelize } = require("../utils/db");

const Consumption = sequelize.define("Consumption", {

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  device_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  hours_used: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  power_used: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  estimated_cost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

});

module.exports = Consumption;