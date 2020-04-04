const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const passport = require("passport")


//Importing Visitor Model
const User = require("../models/user")


//const Menu = mongoose.model("menu");

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
    res.render("userLayouts/work")
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
            req.flash("success_msg", "Account create successfully")
            res.redirect("/login")
            console.log("successfully registered")
        })
    })
})

router.post("/login", (req, res)=>{
    const user = new User();
    
})

module.exports = router;