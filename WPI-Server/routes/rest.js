const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const jsonParser = bodyParser.json();
var jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
var jwks = require('jwks-rsa');
const problemService = require('../service/productService');
const bookService = require('../service/bookService');
const houseService = require('../service/houseService');
var multer  = require('multer');
const path = require('path');
var upload = multer({ dest: 'upload/' });

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://wpilife.auth0.com/.well-known/jwks.json"
    }),
    audience: 'https://wpilife.auth0.com/api/v2/',
    issuer: "https://wpilife.auth0.com/",
    algorithms: ['RS256']
});
const checkScopes = jwtAuthz([ 'postBooks' ]);
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
router.get('/userproducts/:ownerID', (req, res) => {
    var id = req.params['ownerID'];
    console.log(id);
    problemService.getUserProduct(id)
        .then((problem) => res.json(problem));
});
router.post('/products', jwtCheck, jsonParser, (req, res) => {
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
router.get('/userBooks/:id', (req, res) => {
    var id = req.params['id'];
    bookService.getUserBook(id)
        .then((book) => res.json(book))
        .catch((e) => {
            console.log(e);
        });
});
router.post('/books', jwtCheck, jsonParser, (req, res) => {
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
router.get('/userHouses/:id', (req, res) => {
    var id = req.params['id'];
    houseService.getUserHouse(id)
        .then((house) => res.json(house))
        .catch((e) => {
            console.log(e);
        });
});
router.delete('/userHouses/:id', (req, res) => {
    var id = req.params['id'];
    houseService.deleteUserHouse(id)
        .then((house) => res.json(house))
        .catch((e) => {
            console.log(e);
        });
});
router.delete('/userProduct/:id', (req, res) => {
    var id = req.params['id'];
    problemService.deleteUserProduct(id)
        .then((house) => res.json(house))
        .catch((e) => {
            console.log(e);
        });
});
router.delete('/userBook/:id', (req, res) => {
    var id = req.params['id'];
    bookService.deleteUserBook(id)
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
router.post('/houses', jwtCheck, jsonParser, (req, res) => {
    houseService.addHouse(req.body)
        .then((newHouse) => res.json(newHouse))
        .catch((e) => {
            console.log(e);
        });
});
router.post('/image', upload.array('logo', 2), function(req, res, next){
    var files = req.files;
    var resFiles = [];
    files.forEach((file, index) => {
     name = file.originalname;
     extensionName = name.split('.');
     newfilename =`${file.filename}.${extensionName[1]}`;
     fs.renameSync(path.join(__dirname, `../upload/${file.filename}`),  path.join(__dirname, `../upload/${newfilename}`));
     file.filename = newfilename;
     resFiles.push(file.filename);
    }); 
    console.log(resFiles);
    res.send(resFiles);
    console.log(files);
    //console.log(file.filename);
    console.log(req.body);
});
router.get('/images/:id', (req, res) => {
    var id = req.params['id'];
    var img = fs.readFileSync(path.join(__dirname, `../upload/${id}`), 'binary');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary')
    //res.sendFile('index.html', {root: path.join(__dirname, '../../public/')})
});
module.exports = router;