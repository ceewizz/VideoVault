const { Platform } = require('../models'); 
const platformData = require('./seed-data/platformData.json');

const seedPlatforms = async () => {
  await Platform.bulkCreate(platformData);
};

module.exports = seedPlatforms;
