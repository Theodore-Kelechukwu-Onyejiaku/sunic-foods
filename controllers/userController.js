const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const passport = require("passport")


//Importing Visitor Model
const User = require("../models/user")


//const Menu = mongoose.model("menu");


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

router.get("/register",async (req, res)=>{
        res.render("visitorLayouts/register", {message: ""})
})

router.get("/dashboard",async (req, res)=>{
    res.render("userLayouts/dashboard", {message: ""})
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



module.exports = router;