const parser = require('../../utils/multer');
const { MediaItem, Folder } = require('../../models');
const router = require('express').Router();

router.post('/upload', parser.single('file'), async (req, res) => {
  try {
    let itemUrl = req.body.urlInput;
    let folderId = req.body.locationSelect;
    const folderName = req.body.folderNameInput;
    const userId = req.session.user_id;
    const itemName = req.body.itemNameInput;
    const itemType = req.body.typeSelect;

    if (folderId === 'New Folder' && req.body.folderNameInput) {
      const newFolder = await Folder.create({
          folderName: folderName,
          userId: userId, 
      });
      folderId = newFolder.folderId;
    }

    if (req.file) {
      // multer-cloudinary adds path propery to req that matches the cloudinary storage url of image.
      itemUrl = req.file.path; 
    }

    const newMediaItem = await MediaItem.create({
      itemName: itemName,
      itemUrl: itemUrl,
      itemType: itemType,
      folderId: folderId, 
    });

    res.status(200).json(newMediaItem);
  } catch (err) {
    // Work on error response (Worong file format and minimal info)
    res.status(500).json({ message: 'Error creating media item or folder', error: err });
  }
});

module.exports = router;