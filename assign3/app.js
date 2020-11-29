const path = require('path');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoute);
app.use(shopRoute);

app.use((req,res)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(3000);