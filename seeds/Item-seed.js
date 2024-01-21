const { MediaItem } = require('../models'); 
const mediaItemData = require('./seed-data/itemData.json');

const seedMediaItems = async () => {
  await MediaItem.bulkCreate({mediaItemData});
};

module.exports = seedMediaItems;
