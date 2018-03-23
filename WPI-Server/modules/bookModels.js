const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    id: Number,
    type: String,
    price: Number,
    name: String,
    ownerID: Number,
    description: String,
    department: String,
    contactInfo: String,
    imgUrl: []
});
const bookModel = mongoose.model('bookmodels', bookSchema);
module.exports = bookModel;