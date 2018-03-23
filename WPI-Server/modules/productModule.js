const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    id: Number,
    type: String,
    price: Number,
    name: String,
    ownerID: Number,
    description: String,
    contactInfo: String,
    imgUrl: []
});
const productModel = mongoose.model('productmodels', productSchema);
module.exports = productModel;