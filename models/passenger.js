const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({

    busno:{
        type: String,
    },
    from:{
        type: String,
    },
    to:{
        type: String,
    },
    time:{
        type: String,
    },
    date:{
        type: String,
    },
    pricepertrip:{
        type: String,
    },
    total:{
        type: String,
    },
    routeno:{
        type: String,
    },
})

const supplier = mongoose.model("supplier", supplierSchema);

module.exports = supplier;


