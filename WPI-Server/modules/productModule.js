const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    id: Number,
    type: Boolean,
    price: Number,
    name: String,
    ownerID: String,
    description: String,
    contactInfo: String,
    imgUrl: []
});
const productModel = mongoose.model('productmodels', productSchema);
module.exports = productModel;