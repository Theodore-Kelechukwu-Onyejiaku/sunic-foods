//Importing DATABASE
require("./models/db")
const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const async = require("async");
const crypto = require("crypto");
const flash = require("connect-flash");
const session = require('express-session');
const passport = require("passport")
const multer = require("multer")
const LocalStrategy = require("passport-local").Strategy;


//Importing user model
const User = require("./models/user")

//Configuring environment variable
require('dotenv').config()

//middleware for session
app.use(session({
    secret: "just a single auth",
    resave: true,
    saveUninitialized: true 
}))


//Configuring Passport 
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({usernameField: 'email'}, User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//middleware for flash
app.use(flash())
app.use((req, res, next)=>{
    res.locals.success_msg = req.flash(("success_msg"));
    res.locals.error_msg = req.flash(("error_msg"));
    res.locals.error = req.flash(("error"));
    res.locals.currentUser = req.user
    next();
})


//Importing Controllers
//const visitorController = require("./controllers/userController")
const userController = require("./controllers/userController")
const adminController = require("./controllers/adminController")


//Importing the body-parser middle ware
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json())


//Setting Up template engine
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

//Using Controllers
app.use("/", userController)
// app.use("/user", studentController)
app.use("/admin", adminController)

//Static Page
app.use(express.static("public"));




app.listen(process.env.PORT, ()=>{
    console.log("Server running succesfully:"+process.env.PORT)
})