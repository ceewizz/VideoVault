const { MediaItem } = require('../../models');

const router = require('express').Router();

router.post('/upload', async (req, res) => {
    try {
      console.log(req.body);
      const payload = req.body
      const newMediaItem = await MediaItem.create({
        itemName: payload.itemNameInput,
        itemUrl: payload.urlInput,
        itemType: payload.typeSelect,
        // Id will be passed by form query. 
        folderId: 3,
      })
      res.status(200).json(newMediaItem);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;