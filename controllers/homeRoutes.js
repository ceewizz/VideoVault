const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      console.log("HomeRoutes working")
    } catch (err) {
      res.status(500).json(err);
    }
});