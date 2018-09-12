const mongoose = require('mongoose');
const houseSchema = mongoose.Schema({
    id: Number,
    type: Boolean,
    price: String,
    ownerID: String,
    description: String,
    Address: String,
    contactInfo: String,
    imgUrl: [],
    fromDate: String,
    toDate: String
});
const houseModel = mongoose.model('housemodels', houseSchema);
module.exports = houseModel;