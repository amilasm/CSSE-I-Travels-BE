const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    name:{
        type: String,
    },
    nic:{
        type: String,
    },
    dob:{
        type: String,
    },
    address:{
        type: String,
    },
    city:{
        type: String,
    },
    
    postalcode:{
        type: String,
    },
    contact:{
        type: String,
    },

})

const User = mongoose.model("User", UserSchema);

module.exports = User;


