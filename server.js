const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotnev = require("dotenv");
const app = express();
const SingletonDbConnection = require("./databaseConnectionSingleton.js");

require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyparser.json());

SingletonDbConnection.getInstance()


const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb Connection is success!")});
const userRoutes = require("./routes/user_routes.js");

app.use("/user", userRoutes);

const bustripRouter = require("./routes/bustrip_routes.js");

app.use("/bustrip", bustripRouter);

const passengerRouter = require("./routes/passenger_routes.js");


app.use("/passenger", passengerRouter);


app.listen(PORT,() =>{
    console.log('server is up and running on port number:', PORT);
})