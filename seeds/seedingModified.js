const sequelize = require('../config/connection');
const { User, MediaItem, Folder } = require('../models');
const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  // Create users and a folder for each user
  const userFolderPromises = [];
  for (let i = 1; i <= 6; i++) {
    userFolderPromises.push(
      // Create a user
      User.create({
        username: `user${i}`,
        email: `user${i}@example.com`,
        password: await hashPassword(`password${i}${i}${i}`),
      }).then((user) => {
        // Only push the folder promises to be resolved and use the user instances to assign an owner
        return Folder.create({
          folderName: `Folder for user${i}`,
          userId: user.userId,
        });
      })
    );
  }
  // Wait for all promises to resolve and assign to usersFolders so that items can be added
  const usersFolders = await Promise.all(userFolderPromises);
  console.log('\n----- USERS AND FOLDERS SEEDED -----\n');

  // Create an items one for each folder
  const mediaItemsPromises = usersFolders.map((folder, index) => {
    // To pass validation, make sure url is valid in its structure
    const formattedFolderName = encodeURIComponent(`Folder for user${index + 1}`);
    // With the id from each folder, create a media item and return the promise that will be resolved to media item objects. 
    return MediaItem.create({
      itemName: `Media Item for ${folder.folderName}`,
      itemUrl: `http://example.com/mediaFor${formattedFolderName}`,
      itemType: 'Video',
      folderId: folder.folderId,
    });
  });
  // Wait for all media items to be created (promises resolved)
  await Promise.all(mediaItemsPromises);
  console.log('\n----- MEDIA ITEMS SEEDED -----\n');
  process.exit(0);
};
// Catch all errors if seedDatabase promise is rejected.
seedDatabase().catch((error) => {
  console.error('Failed to seed database:', error);
  process.exit(1);
});

