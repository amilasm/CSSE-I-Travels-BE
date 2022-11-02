const router = require("express").Router();
let Passenger = require("../models/passenger");


//add passenger
router.route("/").post((req,res) =>{
    //formal method
    const busno = req.body.busno;
    const from = req.body.from;
    const to = req.body.to;
    const time = req.body.time;
    const date = req.body.date;
    const pricepertrip = req.body.pricepertrip;
    const total = req.body.total;
    const routeno = req.body.routeno;

    const newProduct = new Passenger({
        busno,
        from,
        to,
        time,
        date,
        pricepertrip,total,routeno
    })

    //validation
    newProduct.save().then(()=>{
        res.json("Passenger Added to DB")
    }).catch((err)=>{
        console.log(err);
    })
})

//view all 
router.route("/").get(function(req,res) {
    Passenger.find().then((supplier)=>{
        res.json(supplier)
     }).catch((err)=>{
        console.log(err);
    })

})


//update  details
router.route("/:id").put(async (req,res) =>{
    let supplierID = req.params.id;
    //destructure
    const{ 
        busno,
        from,
        to,
        time,
        date,routeno,
        pricepertrip,total} = req.body;

    const updateProduct = {
        busno,
        from,
        to,
        time,routeno,
        date,
        pricepertrip,total
    }
    const update = await Passenger.findByIdAndUpdate(supplierID, updateProduct)
    //validation
    .then(() =>{
    res.status(200).send({status:" details updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error updating supplier"});
    })
})

//delete  from DB
router.route("/:id").delete(async (req,res) =>{
    let supplierID = req.params.id;

    await Passenger.findByIdAndDelete(supplierID)
    //validation
    .then(() =>{
        res.status(200).send({status:"Passenger deleted from DB"});
        }).catch((err)=>{
            console.log(err.messprice);
            res.status(500).send({status:"error deleting Passenger from DB"});
        })
})

router.route("/:id").get(async (req,res) =>{
    let supplierID = req.params.id;

    await Passenger.findById(supplierID)
    //validation
    .then(() =>{
        res.status(200).send({status:"Passenger fetched"});
    })
})

module.exports = router;