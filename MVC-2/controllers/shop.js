const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  // const products = Product.fetchAll();//Doing this will cause a delay in returning the products & hence the render method happens first leading to undefined products & Error trying to access its .length
  Product.fetchAll((products) => {//Now this cb function takes place once the fetching is done. i.e, cb(products) is implemented right after the products is fetched
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getIndex = function (req, res, next) {
  Product.fetchAll((products) => {//Now this cb function takes place once the fetching is done. i.e, cb(products) is implemented right after the products is fetched
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getOrders = (req,res,next) => {
  res.render('shop/orders',{
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/chekout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
