const router = require('express').Router();

// Get home page
router.get('/', async (req, res) => {
    try {
      console.log("HomeRoutes working");
      res.render('home');
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get profile page
router.get('/profile', async (req, res) => {
    try {
      res.render('profile');
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get upload page
router.get('/upload', async (req, res) => {
    try {
      res.render('upload');
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get one folder
router.get('/openfolder', async (req, res) => {
    try {
      res.render('openedFolder');
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get one item
router.get('/openitem', async (req, res) => {
    try {
      res.render('playscreen');
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;