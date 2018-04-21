const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    id: Number,
    type: Boolean,
    price: String,
    name: String,
    ownerID: String,
    description: String,
    department: String,
    contactInfo: String,
    imgUrl: [],
    today: String
});
const bookModel = mongoose.model('bookmodels', bookSchema);
module.exports = bookModel;