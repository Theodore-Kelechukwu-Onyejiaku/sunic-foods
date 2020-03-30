//Importing DATABASE
require("./models/db")
const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const bodyparser = require("body-parser");
const dotenv = require("dotenv")
const session = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;


//Importing Visitor Model
const Visitor = require("./models/visitor")

//Configuring environment variable
require('dotenv').config()




//Importing the body-parser middle ware
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

//Importing Controllers
const visitorController = require("./controllers/visitorController")
const userController = require("./controllers/userController")
const adminController = require("./controllers/adminController")



//Setting Up template engine
app.set("views", path.join(__dirname,"/views/"));
app.set("view engine", "ejs");

//Using Controllers
app.use("/", visitorController)
// app.use("/user", studentController)
// app.use("/admin", adminController)

//Static Page
app.use(express.static("public"));




app.listen(process.env.PORT, ()=>{
    console.log("Server running succesfully:"+process.env.PORT)
})