// const http = require('http'); Not needed now
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true }));//It will parse the body sent through a form but it'll NOT parse bodies sent through files/json,etc.
app.use(express.static(path.join(__dirname,'public'))); 

app.use('/admin', adminRoutes);//order still matters
app.use(shopRoutes);

app.use('/', (req, res) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000);
