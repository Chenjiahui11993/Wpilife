const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    id: Number,
    type: Boolean,
    price: String,
    name: String,
    ownerID: String,
    description: String,
    contactInfo: String,
    imgUrl: [],
    today: String
});
const productModel = mongoose.model('productmodels', productSchema);
module.exports = productModel;