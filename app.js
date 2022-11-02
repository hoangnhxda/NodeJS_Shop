const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const errorController = require('./controllers/error');
const adminController = require('./controllers/products');

// const pageNotFound = require('./routes/404_route');
// const productRoute = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/product', productRoute);
// app.use(pageNotFound);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
