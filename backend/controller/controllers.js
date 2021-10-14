const product = require('../models/product');

const getProducts = async (re, res) => {
  try {
    const products = await product.find({});    //.find to query key/values to return filtered array
    res.json(products);
  } catch (err) {
    console.log(err);
  }
}

module.exports = getProducts;