const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class MediaItem extends Model {}

MediaItem.init(
  {
    itemId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itemUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
      },
    },
    itemType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    folderId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'folder',
        key: 'folderId',
      },
    },
    dateUploaded: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'mediaItem',
  }
);

module.exports = MediaItem;
