const { Model, DataTypes } = require('sequelize');
const sequelize = require (../config/connection);

class Folder extends Model {}

Folder.init({
  FolderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  FolderName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  DateCreated: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  IsFavorite: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, { sequelize, modelName: 'folder' });

module.exports = Folder;