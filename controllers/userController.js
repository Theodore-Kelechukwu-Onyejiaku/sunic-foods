const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const passport = require("passport");
const multer = require("multer")
const bodyparser = require("body-parser");



//configuring multer
var storage = multer.diskStorage({
        destination: "./public/uploads/work",
        filename: (req, file, cb)=>{
            cb(null, Date.now()+".png")
        },
})
var upload = multer({storage : storage});


//Importing the body-parser middle ware
router.use(bodyparser.urlencoded({
    extended: true
}));
router.use(bodyparser.json())




//Importing Visitor Model
const User = require("../models/user");
//Importing Work Model so students or users can register
const Work = require("../models/work");


//Importing Menu Middleware 
//const Menu = require("../models/user");

//middle ware to check if user is authenticated
function isAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    req.flash("error_msg", "Please login to view this page");
    res.redirect("/login")
}

//To Apply for delivery service
router.get("/work", (req, res)=>{
    res.render("userLayouts/work");
})



router.get("/", (req, res)=>{
    res.render("visitorLayouts/index", {message: "Visitor Layout"});
})

router.get("/about", (req, res)=>{
    res.render("visitorLayouts/about", {message: "Visitor Layout"});
})

router.get("/menu", (req, res)=>{
    res.render("visitorLayouts/menu", {message: "Visitor Layout"});
})

router.get("/contact", (req, res)=>{
    res.render("visitorLayouts/contact", {message: "Visitor Layout"});
})

router.get("/login", (req, res)=>{
    res.render("visitorLayouts/login", {message: ""})
})

router.get("/logout", (req, res)=>{
    req.logout();
    req.flash("success_msg", "You have logged out successfully")
    res.redirect("/login")
})

router.get("/register",async (req, res)=>{
        res.render("visitorLayouts/register", {message: ""})
})

router.get("/dashboard", isAuthenticated, (req, res)=>{
    res.render("userLayouts/dashboard")
})



/**
 *  BEGINNING OF POST METHODS
 */

router.post("/login", passport.authenticate("local",{
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: "Invalid email address or password"
}));


router.post("/register", (req, res)=>{
    let {name, email, password} = req.body;
    
    let userData = {
        name : name,
        email: email,
    }

    User.register(userData, password, (err, user)=>{
        if(err){
            req.flash("error_msg", "ERROR: "+err);
            res.redirect("/register");
            console.log(err)
        }
        passport.authenticate("local") (req, res, ()=>{
            req.flash("success_msg", "Account created successfully")
            res.redirect("/login")
            console.log("successfully registered")
        })
    })
})

router.post("/work", upload.single("photo"), (req, res)=>{
   // res.end("successfully uploaded:"+req.body)
   User.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc)=>{
    console.log(req.file);
    if(!err){
        res.render("userLayouts/work");
        console.log(req.body)
    }else{
        console.error("Error in updating student information"+ err)
    }
})
})
module.exports = router;