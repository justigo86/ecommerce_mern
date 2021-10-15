const express = require('express');
const router = express.Router();

const { getProduct, getProducts } = require('../controller/controllers');

router.get('/', getProducts);   //get all products from database

router.get('/:id', getProduct);   //get specific product from database

module.exports = router;