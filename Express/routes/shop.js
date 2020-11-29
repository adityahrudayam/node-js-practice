const path = require('path'); //core module

const express = require('express');

const rootDir=require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => { //gets executed for any route that starts with '/'
    console.log('In another middleware');
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); //The content type is automatically set for us here.
});

module.exports = router;