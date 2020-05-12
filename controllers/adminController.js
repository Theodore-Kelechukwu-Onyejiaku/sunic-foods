const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const passport = require("passport");
const multer = require("multer")
const bodyparser = require("body-parser");

//GET REQUESTS

//login page for admin
router.get("/login", (req, res)=>{
    res.render("adminLayouts/login")
})

//initial admin dashboard
router.get("/", (req, res)=>{
    res.render("adminLayouts/index")
})




module.exports = router;