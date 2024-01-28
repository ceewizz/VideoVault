// withAuth method ready to be added to routes that should be protected
const withAuth = require('../utils/auth');
const fetchTikTokData = require('../utils/fetch');
const router = require('express').Router();
const { User, Folder, MediaItem} = require('../models');

// Get Initial page
router.get('/', async (req, res) => {
    try {
      res.render('initial' , { layout: 'landing' });
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get home page
router.get('/home', withAuth, async (req, res) => {
    try {
      const userId = req.session.user_id;

      if (!userId) {
        throw new Error("User ID not found in session");
      }
      
      const folderData = await Folder.findAll({
        where: {
          userId: userId
        }
      });
      // console.log(folderData);
      const folders = folderData.map(folder => folder.get({plain: true}));
      // console.log(folders);
      res.render('home', { folders });
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get profile page
router.get('/profile', withAuth, async (req, res) => {
    try {
      res.render('profile');
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get upload page
router.get('/upload', withAuth, async (req, res) => {
    try {
      res.render('uploadTesting');
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get search page
router.get('/search', withAuth, async (req, res) => {
    try {
      res.render('search');
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get one folder
router.get('/folder/:folderId', withAuth, async (req, res) => {
    try {
      const userId = req.session.user_id;
      const folderId = req.params.folderId;

      const folderData = await Folder.findOne({
        where: {
          folderId: folderId,
          userId: userId
        },
        include: [{model: MediaItem}]
      });

      if (!folderData) {
        res.status(404).json({message: 'Folder not found or does not belong to user.'})
      }

      const folder = folderData.get({ plain: true });
      // console.log(folder);

      res.render('openedFolder', { folder } );
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get one item
router.get('/item/:itemId', withAuth, async (req, res) => {
    try {
      const userId = req.session.user_id;
      const itemId = req.params.itemId;

      const itemData = await MediaItem.findOne({
        where: {
          itemId: itemId
        },
        include: [{
          model: Folder,
          where: {userId: userId},
          // No need to bring folder data
          attributes: []
        }]
      });

      if (!itemData) {
        res.status(404).json({message: 'Item not found or does not belong to user.'})
      }

      const item = itemData.get({ plain: true });
      console.log(item);

      // const tiktokVideoUrl = `https://www.tiktok.com/oembed?url=${item.itemUrl}`;
      const tiktokVideoUrl = `https://www.tiktok.com/oembed?url=https://www.tiktok.com/@scout2015/video/6718335390845095173`;
      const tiktokData = await fetchTikTokData(tiktokVideoUrl);
      console.log(tiktokData);


      res.render('playscreen', { item, tiktokResponse: tiktokData });
    } catch (err) {
      res.status(500).json(err);
    }
});

// Login
router.get('/login', async (req, res) => {
    try {
      res.render('login', { layout: 'landing' });
    } catch (err) {
      res.status(500).json(err);
    }
});

// signup
router.get('/signup', async (req, res) => {
    try {
      res.render('signup', { layout: 'landing' });
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;