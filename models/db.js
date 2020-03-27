const mongoose = require("mongoose");
const path = require('path');
const dotenv = require("dotenv")

//configuring dotenv
dotenv.config({path: './config.env'})


mongoose.connect(process.env.DATABASE, {useNewUrlParser: true}, (err)=>{
}).then(connection =>{
    console.log("MongoDB Connection Successful")
}).catch(err =>{
    console.error()
})

// //Registering the Student model
// require("./student")

// //REgistering the Course model
// require("./course")