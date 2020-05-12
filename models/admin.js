const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")

const adminSchema = new mongoose.Schema({
    email: {
        type:String
    },
    password: {
        type: String,
        select: false
    },
    
})

adminSchema.plugin(passportLocalMongoose, {adminnameField: 'email'});
module.exports = mongoose.model('Admin', adminSchema);