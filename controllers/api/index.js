const router = require('express').Router();
const userRoutes = require('./userRoutes');
const folderRoutes = require('./folderRoutes');
const itemRoutes = require('./itemRoutes');

router.use('/users', userRoutes);
router.use('/folders', folderRoutes);
router.use('/items', itemRoutes);

module.exports = router;