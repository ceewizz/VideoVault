const sequelize = require('../config/connection');
const { User, MediaItem, Platform } = require('../models');
const bcrypt = require('bcrypt');

// Async function to hash passwords
const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  // Create sample users
  const users = await Promise.all([
    User.create({
      username: 'user1',
      email: 'user1@example.com',
      password: await hashPassword('password123'),
    }),
    User.create({
      username: 'user2',
      email: 'user2@example.com',
      password: await hashPassword('password456'),
    }),
    User.create({
      username: 'user3',
      email: 'user3@example.com',
      password: await hashPassword('password789'),
    })
  ]);
  console.log('\n----- USERS SEEDED -----\n');

  // Create a sample platform
  const platforms = await Platform.bulkCreate([
    { name: 'Example Platform' }
  ]);
  console.log('\n----- PLATFORM SEEDED -----\n');

  // Create sample media items
  const mediaItems = await MediaItem.bulkCreate([
    {
      title: 'Media Item 1',
      url: 'http://example.com/media1',
      type: 'Video',
      userId: users[0].id, 
      platformId: platforms[0].id,
    },
    {
      title: 'Media Item 2',
      url: 'http://example.com/media2',
      type: 'Video',
      userId: users[1].id, 
      platformId: platforms[0].id,
    },
    {
      title: 'Media Item 3',
      url: 'http://example.com/media3',
      type: 'Video',
      userId: users[2].id, 
      platformId: platforms[0].id,
    },
    {
      title: 'Media Item 4',
      url: 'http://example.com/media4',
      type: 'Video',
      userId: users[2].id, 
      platformId: platforms[0].id,
    }
  ]);
  console.log('\n----- MEDIA ITEMS SEEDED -----\n');

  process.exit(0);
};

seedDatabase().catch((error) => {
  console.error('Failed to seed database:', error);
  process.exit(1);
});
