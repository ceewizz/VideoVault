const { MediaItem } = require('../models').default; 

const mediaItemData = [
  {
    title: 'Sample Video 1',
    url: 'http://example.com',
    type: 'YouTube',
    userId: 1 
  },
  {
    title: 'Sample Video 2',
    url: 'http://example.com',
    type: 'TikTok',
    userId: 2
  }
  // Add more media items when needed. 
];

const seedMediaItems = async () => {
  await MediaItem.bulkCreate(mediaItemData);
};

module.exports = seedMediaItems;
