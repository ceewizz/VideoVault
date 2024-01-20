// withAuth method ready to be added to routes that should be protected
const withAuth = require('../utils/auth');

const router = require('express').Router();

// Get home page
router.get('/', async (req, res) => {
    try {
      res.render('initial' , { layout: 'landing' });
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get home page
router.get('/home', async (req, res) => {
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

// Get search page
router.get('/search', async (req, res) => {
    try {
      res.render('search');
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