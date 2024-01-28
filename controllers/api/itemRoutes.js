const parser = require('../../utils/multer');
const { MediaItem } = require('../../models');
const router = require('express').Router();

router.post('/upload', parser.single('file'), async (req, res) => {
    try {
      let itemUrl = req.body.urlInput; 
      if (req.file) {
        itemUrl = req.file.path;
      }
      
      const newMediaItem = await MediaItem.create({
        itemName: req.body.itemNameInput,
        itemUrl: itemUrl,
        itemType: req.body.typeSelect,
        folderId: 3, //Receive from form query
      });

      res.status(200).json(newMediaItem);
    } catch (err) {
      // Work on error response (Worong file format and minimal info)
      res.status(500).json(err);
    }
});

module.exports = router;