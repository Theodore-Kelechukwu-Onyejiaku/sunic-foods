const mongoose = require("mongoose");
const path = require('path');
const dotenv = require("dotenv")

//configuring dotenv
require('dotenv').config()


mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(connection=>{
    console.log("MongoDB connection successful")
}).catch(err =>{
    console.error("Error connecting to database: "+err)
})

//Registering Visitor Model
require("./user")

//Registering Work Model
require("./work")

// //Registering the Student model
// require("./student")

// //REgistering the Course model
// require("./course")

