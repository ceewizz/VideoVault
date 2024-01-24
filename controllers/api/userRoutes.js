const router = require('express').Router();
const { User, Folder, MediaItem } = require('../../models');
// Sign Up
router.post('/', async (req, res) => {
  try {
    // Create new user based on the req object (must match user model).
    const userData = await User.create(req.body);
    // Create a new session and add user id as well as logged in status to the response object. 
    // Express-session middleware automatically sets the connect.sid cookie in the user's browser. 
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      // Send back the user data
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
//  Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password.' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'Login Successful' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});
// Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Express session used to destroy the session server side 
    req.session.destroy(() => {
      res
        .clearCookie('connect.sid') // Set cookie to expired and removed by browser
        .status(204)
        .end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;