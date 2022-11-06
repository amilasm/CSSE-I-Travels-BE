const mongoose = require("mongoose");
require("dotenv").config();


const URL = process.env.MONGODB_URL;



module.exports = class SingletonDbConnection {

  static instance;



  constructor() {

    // Initiallize Connection.

    mongoose.connect(URL, {

      useNewUrlParser: true,

      useUnifiedTopology: true,

    });

  }



  static getInstance() {

   // Check instance

    if (this.instance) {

      return this.instance;

    }

    // return new instance.

    this.instance = new SingletonDbConnection();

    return this.instance;

  }

};