require('dotenv').config();
const express = require('express');
const db = require('./config/db');
const routes = require('./routes/routes');

db();     //using database created with mongoose
const app = express();    //create express server as variable
app.use(express.json());  //parse incoming data with JSON

app.use('/products', routes);   //import and use product route

app.get('/', (req, res) => res.send('this is working'));

app.listen(process.env.PORT || 3001, 
  () => { console.log(`app good on port ${process.env.PORT || 3001}`); }
)