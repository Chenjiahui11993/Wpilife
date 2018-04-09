const productModel = require('../modules/productModule');
const getProducts = () => {
    return new Promise((resolve, reject) => {
        productModel.find({type: true}, (err, problems) => {
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
        productModel.findOne({ id: id }, (err, problems) => {
            if (err) {
                reject(err);
            } else {
                resolve(problems);
            }
        });
    });
}
const getUserProduct = (id) => {
    return new Promise((resolve, reject) => {
        console.log(id);
        productModel.find({ ownerID: id }, (err, problems) => {
            if (err) {
                reject(err);
            } else {
                resolve(problems);
            }
        });
    });
}
const deleteUserProduct = (id) => {
    return new Promise((resolve, reject) => {
        var update = { type: false }
        productModel.update({ id: id }, update, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
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
    addProduct,
    getUserProduct,
    deleteUserProduct
}