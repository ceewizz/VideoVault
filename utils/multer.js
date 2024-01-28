const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'VideoVault',
        allowedFormats: ['jpg', 'png', 'jpeg', 'gif'],
    },
});

const parser = multer({ storage: storage });

module.exports = parser;