const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const passport = require("passport")


//Importing Visitor Model
const Visitor = require("../models/visitor")


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

router.get("/register", (req, res)=>{
    res.render("visitorLayouts/register", {message: ""})
})




/**
 *  BEGINNING OF POST METHODS
 */

router.post("/login", passport.authenticate("local"), (err, res)=> {
    if(err){
        res.render("visitorLayouts/login", {message: err})
    }else{
        res.render("userLayouts/dashboard")
    }
})
router.post("/register", (req, res)=>{
    let {name, email, password} = req.body;
    let userData = {
        name: name,
        email: email
    };

    Visitor.register(userData, password, (err, visitor)=>{
        if(err){
            res.render("visitorLayouts/register", {message: err});
        }
            passport.authenticate('local') (req, res, ()=>{
            res.render("vistorLayouts/login", {message : "Successfully Registered, You can now log in"})
            })
    })
})



module.exports = router;