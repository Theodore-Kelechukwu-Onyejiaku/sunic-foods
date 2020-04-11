const mongoose = require("mongoose")

const workSchema = new mongoose.Schema({
    name  : {type: String},
    address : {type : String},
    gender: {type: String},
    dob: {type: String},
    email:{type: String},
    phone:{type: String},
    photo: {type: String}
})

module.exports = mongoose.model("Work", workSchema);