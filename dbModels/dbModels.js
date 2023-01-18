const sequelize = require("../dbConnection/dbConnection");
const { DataTypes } = require("sequelize");

const items = sequelize.define("items", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    img: { type: DataTypes.STRING },
    link: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    desc: { type: DataTypes.STRING },
    titile: { type: DataTypes.STRING },
  });

  module.exports = { items };