require('dotenv').config();
const fetch = require('cross-fetch');

// const productsData = require('./data/products');
const db = require('./config/db');
const product = require('./models/product');

db();   //connect to database

const importData = async() => {     //delete current information in database to only include incoming data
  const productsUrl = 'https://fakestoreapi.com/products';  //identify api url
  const response = await fetch(productsUrl);    //fetch data from api
  const jsonData = await response.json();       //parse data with JSON
  try {
    await product.deleteMany({});   //deleteMany mongoDB documentation https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany/
    await product.insertMany(jsonData);    //insert multiple documents - https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/
    console.log('Data successfully imported');
    process.exit();
  } catch (err) {
    console.error('Data did not import successfully');
    process.exit(1);
  }
}

importData();   //immediately run importData function when seeder.js is called