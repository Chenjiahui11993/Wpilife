const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const problemService = require('../service/productService');
const bookService = require('../service/bookService');
const houseService = require('../service/houseService');

// deal with household item
router.get('/products', (req, res) => {
    problemService.getProducts()
        .then((problems) => res.json(problems)); // return all product with json format, res is the return value
});
router.get('/products/:id', (req, res) => {
    var id = req.params['id'];
    console.log(id);
    problemService.getProduct(id)
        .then((problem) => res.json(problem));
});
router.post('/products', jsonParser, (req, res) => {
    problemService.addProduct(req.body)
        .then((newProblem) => res.json(newProblem));
});
//deal with book section
router.get('/books', (req, res) => {
    bookService.getAllBooks()
        .then((books) => res.json(books));
});
router.get('/books/:id', (req, res) => {
    var id = req.params['id'];
    bookService.getOneBook(id)
        .then((book) => res.json(book))
        .catch((e) => {
            console.log(e);
        });
});
router.post('/books', jsonParser, (req, res) => {
    bookService.addBook(req.body)
        .then((newBook) => res.json(newBook));
});
router.get('/houses', (req, res) => {
    houseService.getAllHouse()
        .then((house) => res.json(house))
        .catch((e) => {
            console.log(e);
        });
});
router.get('/houses/:id', (req, res) => {
    var id = req.params['id'];
    houseService.getOneHouse(id)
        .then((house) => res.json(house))
        .catch((e) => {
            console.log(e);
        });
});
router.post('/houses', jsonParser, (req, res) => {
    houseService.addHouse(req.body)
        .then((newHouse) => res.json(newHouse))
        .catch((e) => {
            console.log(e);
        });
})
module.exports = router;