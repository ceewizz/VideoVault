const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class MediaItem extends Model {}

MediaItem.init({
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isURL: true
    }
  },
  
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users', 
      key: 'id'
    }
  },
  platformId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'platform',
      key: 'id'
    }
  }
}, { 
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true, 
  modelName: 'mediaItem' });

module.exports = MediaItem;
