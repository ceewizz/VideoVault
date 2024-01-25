const User = require('./User');
const MediaItem = require('./MediaItem');
const Folder = require('./Folder'); 

User.hasMany(Folder, { 
  foreignKey: 'userId' 
});

Folder.belongsTo(User, { 
  foreignKey: 'userId' 
});

Folder.hasMany(MediaItem, { 
  foreignKey: 'folderId' 
});

MediaItem.belongsTo(Folder, { 
  foreignKey: 'folderId' 
});

module.exports = {
  User,
  MediaItem,
  Folder 
};
