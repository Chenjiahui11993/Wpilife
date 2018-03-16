const mongoose = require('mongoose');
const houseSchema = mongoose.Schema({
    id: Number,
    type: String,
    price: Number,
    name: String,
    ownerID: Number,
    description: String,
    address: String,
    contactInfo: String,
    imgUrl: String
});
const houseModel = mongoose.model('housemodels', houseSchema);
module.exports = houseModel;