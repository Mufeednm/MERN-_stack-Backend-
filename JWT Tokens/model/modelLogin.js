const mongoose = require("mongoose")
const LoginSchema = mongoose.Schema({
    name:String,
    email : String,
    password:String
})
module.exports= mongoose.model("SignIN",LoginSchema )