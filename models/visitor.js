const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")

const visitorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type:String
    },
    password: {
        type: String,
        select: false
    }
})

module.exports = mongoose.model('Visitor', visitorSchema);