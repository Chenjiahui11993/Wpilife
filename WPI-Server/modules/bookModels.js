const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    id: Number,
    type: Boolean,
    price: Number,
    name: String,
    ownerID: String,
    description: String,
    department: String,
    contactInfo: String,
    imgUrl: []
});
const bookModel = mongoose.model('bookmodels', bookSchema);
module.exports = bookModel;