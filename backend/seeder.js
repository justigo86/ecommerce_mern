require('dotenv').config();

// const productsData = require('./data/products');
const db = require('./config/db');
const product = require('./models/product');

db();   //connect to database

const importData = async() => {     //delete current information in database to only include incoming data
  const productsUrl = 'https://fakestoreapi.com/products';
  console.log(fetch('https://fakestoreapi.com/products'));;
  // const response = await fetch(productsUrl);
  // const jsonData = await response.json();
  try {
    await product.deleteMany({});   //deleteMany mongoDB documentation https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany/
    await product.insert(jsonData);    //insert multiple documents - https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/
    console.log('Data successfully imported');
    process.exit();
  } catch (err) {
    console.error('Data did not import successfully');
    process.exit(1);
  }
}

importData();   //immediately run importData function when seeder.js is called