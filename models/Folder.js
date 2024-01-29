const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class Folder extends Model {}

Folder.init(
  {
    folderId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    folderName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'userId',
      },
    },
    dateCreated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    IsFavorite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'folder',
    hooks: {
      beforeCreate: (folder) => {
        folder.folderName = folder.folderName.charAt(0).toUpperCase() + folder.folderName.slice(1);
      },
    },
  }
);

module.exports = Folder;
