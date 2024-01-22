const User = require('./Users');
const MediaItem = require('./MediaItem');
const Platform = require('./Platform'); 

User.hasMany(MediaItem, { 
  foreignKey: 'userId' 
});

MediaItem.belongsTo(User, { 
  foreignKey: 'userId' 
});

Platform.hasMany(MediaItem, { 
  foreignKey: 'platformId' 
});

MediaItem.belongsTo(Platform, { 
  foreignKey: 'platformId' 
});

module.exports = {
  User,
  MediaItem,
  Platform 
};
