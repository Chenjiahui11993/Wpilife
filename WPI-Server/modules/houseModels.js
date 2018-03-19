const mongoose = require('mongoose');
const houseSchema = mongoose.Schema({
    id: Number,
    type: String,
    price: Number,
    ownerID: Number,
    description: String,
    Address: String,
    contactInfo: String,
    imgUrl: String
});
const houseModel = mongoose.model('housemodels', houseSchema);
module.exports = houseModel;