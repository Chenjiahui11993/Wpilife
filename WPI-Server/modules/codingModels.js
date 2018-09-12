const mongoose = require('mongoose');
const codingSchema = mongoose.Schema({
    id: Number,
    validState: Boolean,
    roomNumber: String
});
const codingModel = mongoose.model('roomnumbers', codingSchema);
module.exports = codingModel;
