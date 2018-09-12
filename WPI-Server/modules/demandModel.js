const mongoose = require('mongoose');
const demandSchema = mongoose.Schema({
    id: Number,
    type: Boolean,
    name: String,
    ownerID: String,
    description: String,
    contactInfo: String,
    today: String
});
const demandModel = mongoose.model('demandmodels', demandSchema);
module.exports = demandModel;