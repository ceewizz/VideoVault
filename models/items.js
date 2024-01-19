const { Model, DataTypes } = require('sequelize');
const sequelize = require (../config/connection);

class Item extends Model {}

Item.init({
  ItemID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ItemName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ItemType: {
    type: DataTypes.ENUM('URL', 'Image'),
    allowNull: false
  },
  ItemUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  FileName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  DateUploaded: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }

}, { sequelize, modelName: 'item' });

module.exports = Item;