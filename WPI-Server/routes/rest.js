const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const problemService = require('../service/productService');

router.get('/products', (req, res) => {
    problemService.getProducts()
        .then((problems) => res.json(problems));
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
})
module.exports = router;