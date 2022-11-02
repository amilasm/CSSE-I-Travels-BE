const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BusTripSchema = new Schema({

    busno:{
        type: String,
    },
    routeno:{
        type: String,
    },
    capacity:{
        type: String,
    },
    type:{
        type: String,
    },
    roottype:{
        type: String,
    },
  
    time:{
        type: String,
    },
    status:{
        type: String,
    },
    from:{
        type: String,
    },
    to:{
        type: String,
    },
    noofbus:{
        type: String,
    },
    price:{
        type: String,
    },
})

const BusTrip = mongoose.model("bustrip", BusTripSchema);

module.exports = BusTrip;


