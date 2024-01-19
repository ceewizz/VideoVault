const { Model, DataTypes } = require('sequelize');
const sequelize = require('..config/connection'); 

class Platform extends Model {}

Platform.init({
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, { sequelize, modelName: 'platform' });

module.exports = Platform;
