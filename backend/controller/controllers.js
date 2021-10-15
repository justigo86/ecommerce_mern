const product = require('../models/product');

const getProducts = async (req, res) => {
  try {
    const products = await product.find({});    //.find to query key/values to return filtered array
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json('server error')
  }
}

const getProduct = async (req, res) => {
  try {
    const products = await product.findById(req.params.id);    //.find to query key/values to return filtered array
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json('server error')
  }
}

module.exports = {
  getProducts,
  getProduct
};