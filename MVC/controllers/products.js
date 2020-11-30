const Product = require('../models/product');
exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  // const products = Product.fetchAll();//Doing this will cause a delay in returning the products & hence the render method happens first leading to undefined products & Error trying to access its .length
  Product.fetchAll((products) => {//Now this cb function takes place once the fetching is done. i.e, cb(products) is implemented right after the products is fetched
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};
