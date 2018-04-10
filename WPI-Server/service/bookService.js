const bookModel = require('../modules/bookModels');
const getAllBooks = () => {
    return new Promise((resolve, reject) => {
        bookModel.find({}, (err, books) => {
            if (err) {
                reject(err);
            } else {
                resolve(books);
            }
        });
    });
}
const getOneBook = (id) => {
    return new Promise((resolve, reject) => {
        bookModel.findOne({id: id }, (err, problems) => {
            if (err) {
                reject(err);
            } else {
                resolve(problems);
            }
        });
    });
}
const deleteUserBook = (id) => {
    return new Promise((resolve, reject) => {
        var update = { type: false }
        bookModel.update({ id: id }, update, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}
const getUserBook = (id) => {
    return new Promise((resolve, reject) => {
        bookModel.find({ownerID: id }, (err, problems) => {
            if (err) {
                reject(err);
            } else {
                resolve(problems);
            }
        });
    });
}
const addBook = (newBook) => {
    return new Promise((resolve, reject) => {
        bookModel.count({}, (err, number) => {
            if (err) {
                reject(err);
            } else {
                newBook.id = number + 1;
                const mongoBook = new bookModel(newBook);
                mongoBook.save();
                resolve(mongoBook);
            }
        });
    });
}
module.exports = {
    getAllBooks,
    getOneBook,
    addBook,
    getUserBook,
    deleteUserBook
}