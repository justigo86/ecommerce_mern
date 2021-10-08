require('dotenv').config();
const express = require('express');
const db = require('./config/db')

db();
const app = express();

app.listen(process.env.PORT || 3001, 
  () => { console.log(`app good on port ${process.env.PORT || 3001}`); }
)