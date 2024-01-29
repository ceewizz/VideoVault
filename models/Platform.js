const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class Platform extends Model {}

Platform.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Platform',
    hooks: {
      beforeCreate: (platform) => {
        platform.name = platform.name.charAt(0).toUpperCase() + platform.name.slice(1);
      },
    },
  }
)

module.exports = Platform;
