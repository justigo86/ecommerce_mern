const mongoose = require('mongoose');

//create Schema - with parameters
const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  rating: {
    rate: { type: Number },
    count: { type: Number}
  }
})

const product = mongoose.model('product', productSchema);  //https://mongoosejs.com/docs/guide.html
//.model(name: string, schema?: mongoose.Schema...

module.exports = product;