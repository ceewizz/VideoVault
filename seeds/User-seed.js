const { User } = require('../models'); 
const userData = require('./seed-data/userData.json');

const seedUsers = async () => {
  await User.bulkCreate(userData, { individualHooks: true });
};

module.exports = seedUsers;
