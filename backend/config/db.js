require('dotenv').config();   //loads environment variables from .env file
const mongoose = require('mongoose');

const db = async () => {   //async because connecting to DB
  try {
    await mongoose.connect(process.env.MONGODB_URI,      //process.env accesses .env file to use assigned URI - https://mongoosejs.com/docs/
    {
      useNewUrlParser: true,      //recommended from MongoDB bc driver depreciation
      useUnifiedTopology: true,    //recommended to use Mongo new connection mgmt engine
    });
    console.log("Successful connection to DB");
  } catch (err) {
    console.error("Failed connection to DB");
    process.exit(1);        //force exit - signal uncaught fatal exception (Node) - https://nodejs.org/api/process.html#process_process_exit_code
  }
}

module.exports = db;