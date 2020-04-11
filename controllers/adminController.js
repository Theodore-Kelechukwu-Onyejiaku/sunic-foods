const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


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