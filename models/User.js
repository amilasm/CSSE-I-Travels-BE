const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    name:{
        type: String,
        required: [true,"Please Enter User Name"]
    },
    nic:{
        type: String,
        unique: [true,"This User is Already Exist"], 
        required: [true,"Please Enter NIC"]
    },
    dob:{
        type: String,
        required: [true,"Please Enter DOB"]
    },
    address:{
        type: String,
        required: [true,"Please Enter Address"]
    },
    postalcode:{
        type: String,
        required: [true,"Please Enter Postal Code"]
    },
    contact:{
        type: String,
        required: [true,"Please Enter Contact Number"]
    },
    created_at: {type: Date, default: Date.now},
    enabled: {type: String, default: "Disabled"},
    account_type: {
        type: String,
        default: 'Manager'
    },

})

const User = mongoose.model("User", UserSchema);

module.exports = User;


