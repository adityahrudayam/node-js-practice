const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');//Default is already "views" so this is not actually required but let it be there as a notification

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));//serves static files which can then be accessed in the respective html/JS files

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/',errorController.get404);

app.listen(3000);
