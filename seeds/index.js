const seedMediaItems = require('./item-seed');
const seedPlatforms = require('./platform-seed');
const seedUsers = require('./user-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedMediaItems();
  console.log('\n----- ITEMS SEEDED -----\n');

  await seedPlatforms();
  console.log('\n----- PLATFORMS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedAll();