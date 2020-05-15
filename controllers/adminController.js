const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const multer = require("multer")
const bodyparser = require("body-parser");

//Importing the body-parser middle ware
router.use(bodyparser.urlencoded({
    extended: true
}));
router.use(bodyparser.json())


//Importing Visitor Model
const User = require("../models/user");
//Importing Admin Model
const Admin = require("../models/user");
//Importing Work Model so students or users can register
const Work = require("../models/work");


//Importing Menu Middleware 
//const Menu = require("../models/user");

/**
 *  GET ROUTES
 */
router.get("/", (req, res)=>{
    res.render("adminLayouts/index");
});

router.get("/job", (req, res)=>{
    User.find((err, doc)=>{
        if(!err){
            res.render("adminLayouts/job",{doc:doc})
        }else{
            console.error(err)
        }
    })
});

router.get("/post", (req, res)=>{
    User.find(err, doc)
    res.render("adminLayouts/post");
});

router.get("/orders", (req, res)=>{
    res.render("adminLayouts/orders");
});

router.get("/table", (req, res)=>{
    res.render("adminLayouts/table");
});



router.post("/work", (req, res)=>{
   User.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc)=>{
    console.log(req.file);
    if(!err){
        res.redirect("/admin/job")
        console.log(req.body)
    }else{
        console.error("Error in updating student information"+ err)
    }
})
})


module.exports = router;