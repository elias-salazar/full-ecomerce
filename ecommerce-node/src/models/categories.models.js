const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Categories = db.define("categories", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Categories;
