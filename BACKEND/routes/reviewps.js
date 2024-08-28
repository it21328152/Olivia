const router = require("express").Router();
const {reviewp} = require("express");
let Reviewp = require("../models/reviewp");



//Create Class..
router.route("/addreview").post((req,res)=>{

    const rname = req.body.rname;
    const rating = req.body.rating;
    const rev = req.body.rev;
    



    const newReviewp = new Reviewp({
        rname,
        rating,
        rev

    })

    newReviewp.save().then(()=>{
        res.json(" Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Read..
router.route("/allreview").get((req,res)=>{

    Reviewp.find().then((reviewp)=>{
        res.json(reviewp)
    }).catch((err)=>{
        console.log(err)
    })
})






//Delete Class..
router.route("/deletereview/:id").delete(async (req, res) => {
    let reviewpId = req.params.id;

    await Reviewp.findByIdAndDelete(reviewpId)
    .then(() => {
        res.status(200).send({status: "Review Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete route", error: err.message});
    })
})



 

module.exports = router;