const mongoose = require("mongoose")
const userSchema= new mongoose.Schema({
name:String,
age : Number,
company:String
})
module.exports= mongoose.model("Users",userSchema )