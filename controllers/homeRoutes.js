// withAuth method ready to be added to routes that should be protected
const withAuth = require('../utils/auth');
const router = require('express').Router();
const { User, Folder, MediaItem} = require('../models')

// Get home page
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
      res.render('upload');
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
router.get('/openfolder', withAuth, async (req, res) => {
    try {
      res.render('openedFolder');
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get one item
router.get('/openitem', withAuth, async (req, res) => {
    try {
      res.render('playscreen');
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