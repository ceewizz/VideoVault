const { Platform } = require('.models'); 

const platformData = [
  { name: 'YouTube' },
  { name: 'Facebook' },
  { name: 'TikTok' }
  // Additional platforms if needed.
];

const seedPlatforms = async () => {
  await Platform.bulkCreate(platformData);
};

module.exports = seedPlatforms;
