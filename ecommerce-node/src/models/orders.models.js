const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Orders = db.define("orders", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "pending",
  },
  totalPrice: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    defaultValue: 0,
    field: "total_price",
  },
});

module.exports = Orders;
