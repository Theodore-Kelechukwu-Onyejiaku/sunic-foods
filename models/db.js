const mongoose = require("mongoose");
const path = require('path');
const dotenv = require("dotenv")

//configuring dotenv
require('dotenv').config()


mongoose.connect(process.env.DATABASE, {
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

// //Registering the Student model
// require("./student")

// //REgistering the Course model
// require("./course")

