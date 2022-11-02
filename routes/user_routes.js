const router = require("express").Router();
let User = require("../models/User");

     
//add user
router.route("/").post((req,res) =>{
    //formal method
    const name = req.body.name;
    const nic = req.body.nic;
    const dob = req.body.dob;
    const address = req.body.address;
    const city = req.body.city;
    const postalcode = req.body.postalcode;
    const contact = req.body.contact;

    const newOrder = new User({

        name,
        nic,
        dob,
        address,
        city,
        postalcode,
        contact
    })

    //validation
    newOrder.save().then(()=>{
        res.json("User Added to DB")
    }).catch((err)=>{
        console.log(err);
    })
})

//view all users
router.route("/").get(function(req,res) {
    User.find().then((orders)=>{
        res.json(orders)
     }).catch((err)=>{
        console.log(err);
    })

})


//update order details
router.route("/:id").put(async (req,res) =>{
    let orderID = req.params.id;
    //destructure
    const{ name,
        nic,
        dob,
        address,
        city,
        postalcode,
        contact} = req.body;

    const updateOrder = {
        name,
        nic,
        dob,
        address,
        city,
        postalcode,
        contact
    }
    const update = await User.findByIdAndUpdate(orderID, updateOrder)
    //validation
    .then(() =>{
    res.status(200).send({status:"user details updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error updating user profile"});
    })
})

//delete order from DB
router.route("/:id").delete(async (req,res) =>{
    let orderID = req.params.id;

    await User.findByIdAndDelete(orderID)
    //validation
    .then(() =>{
        res.status(200).send({status:"user deleted from DB"});
        }).catch((err)=>{
            console.log(err.messprice);
            res.status(500).send({status:"error deleting  user from DB"});
        })
})

router.route("/:id").get(async (req,res) =>{
    let orderID = req.params.id;

    await User.findById(orderID)
    //validation
    .then(() =>{
        res.status(200).send({status:"user fetched"});
    })
})


















module.exports = router;