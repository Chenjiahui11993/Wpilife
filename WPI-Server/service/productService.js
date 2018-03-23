const productModel = require('../modules/productModule');
const getProducts = () => {
    return new Promise((resolve, reject) => {
        productModel.find({}, (err, problems) => {
            if (err) {
                reject(err);
            } else {
                resolve(problems);
            }
        });
    });
}

const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        productModel.findOne({id: id }, (err, problems) => {
            if (err) {
                reject(err);
            } else {
                resolve(problems);
            }
        });
    });
}
const addProduct = (newProduct) => {
    return new Promise((resolve, reject) => {
        productModel.count({}, (err, count) => {
            newProduct.id = count + 1;
            if (err) {
                reject(err)
            } else {
                const mongoProduct = new productModel(newProduct);
                mongoProduct.save();
                resolve(mongoProduct);
            }
        });
    });
}
module.exports = {
    getProducts,
    getProduct,
    addProduct
}