const path = require('path');

const express = require('express');

const rootDir=require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res) => { //.post: for incoming post requests , .get: for incoming get requests
    console.log(req.body);
    res.redirect('/'); //Instead of setting the statusCode & location header
});


module.exports = router;