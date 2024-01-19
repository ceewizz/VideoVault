const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      console.log("HomeRoutes working");
      res.render('home');
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/profile', async (req, res) => {
    try {
      res.render('profile');
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/upload', async (req, res) => {
    try {
      res.render('upload');
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;