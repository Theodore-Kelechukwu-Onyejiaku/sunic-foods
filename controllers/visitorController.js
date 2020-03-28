const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
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
    res.render("visitorLayouts/login", {message: "Visitor Layout"})
})

module.exports = router;