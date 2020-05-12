const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type:String
    },
    password: {
        type: String,
        select: false
    },
    applied:{
        type: String
    },
    address: {
        type: String
    },
    gender:{
        type: String
    },
    dob : {
        type: Date
    },
    number: {
        type: String
    },
    photo: {
        type: String
    },
    approved: {
        type: String
    },
    reason:{
        type: String
    }
})

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
module.exports = mongoose.model('User', userSchema);