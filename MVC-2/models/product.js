const fs = require('fs');
const path = require('path');

// const products = [];
const path_p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
const getProductsFile = cb => {
    fs.readFile(path_p, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    });
};

module.exports = class Product {
    constructor(title,imageUrl,description,price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
    save() {
        getProductsFile(products => {//this is an arrow function => this here would be this of save() function or the outer/parent scope
            // console.log(this);
            products.push(this);
            fs.writeFile(path_p, JSON.stringify(products), err => {
                console.error(err);
            });
        });
        // fs.readFile(path_p, (err, fileContent) => {
        //     let products = [];
        //     if (!err) {
        //         products = JSON.parse(fileContent);
        //     }
        //     fs.writeFile(path_p, JSON.stringify(products), err => {
        //         console.error(err);
        //     });
        // });
    }
    static fetchAll(cb) {
        getProductsFile(cb);
    }
}