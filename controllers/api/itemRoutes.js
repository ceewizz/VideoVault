const router = require('express').Router();

router.post('/upload', async (req, res) => {
    try {
      console.log(req.body);
      res.render('uploadTesting')
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;