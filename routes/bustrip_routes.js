const router = require("express").Router();
let BusTrip = require("../models/BusTrip");


//add product
router.route("/").post((req,res) =>{
    //formal method
    const busno = (req.body.busno);
    const routeno = req.body.routeno;
    const capacity = (req.body.capacity);
    const type = req.body.type;
    const roottype = req.body.roottype;
    const time = req.body.time;
    const status = (req.body.status);
    const from = req.body.from;
    const to = req.body.to;
    const noofbus = req.body.noofbus;
    const price = req.body.price;

    const newProduct = new BusTrip({

        busno,
        routeno,
        capacity,
        type,
        roottype,
        time,status,from,to,noofbus,price
    })

    //validation
    newProduct.save().then(()=>{
        res.json("bustrip Added to DB")
    }).catch((err)=>{
        console.log(err);
    })
})

//view all products
router.route("/").get(function(req,res) {
    BusTrip.find().then((bus)=>{
        res.json(bus)
     }).catch((err)=>{
        console.log(err);
    })

})


//update product details
router.route("/:id").put(async (req,res) =>{
    let productID = req.params.id;
    //destructure
    const{  busno,
        routeno,
        capacity,
        type,
        roottype,
        time,status,from,to,noofbus,price} = req.body;

    const updateProduct = {
        busno,
        routeno,
        capacity,
        type,
        roottype,
        time,status,from,to,noofbus,price
    }
    const update = await BusTrip.findByIdAndUpdate(productID, updateProduct)
    //validation
    .then(() =>{
    res.status(200).send({status:"Bus Trip details updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error updating Bus Details"});
    })
})

//delete product from DB
router.route("/:id").delete(async (req,res) =>{
    let productID = req.params.id;

    await BusTrip.findByIdAndDelete(productID)
    //validation
    .then(() =>{
        res.status(200).send({status:"BusTrip deleted from DB"});
        }).catch((err)=>{
            console.log(err.messprice);
            res.status(500).send({status:"error deleting BusTrip from DB"});
        })
})

router.route("/:id").get(async (req,res) =>{
    let productID = req.params.id;

    await BusTrip.findById(productID)
    //validation
    .then(() =>{
        res.status(200).send({status:"BusTrip fetched"});
    })
})


















module.exports = router;