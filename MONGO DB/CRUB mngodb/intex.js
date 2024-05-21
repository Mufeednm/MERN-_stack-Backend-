const mongoose = require("mongoose")
const express= require("express")
const app=express()
const dotenv=require("dotenv").config()
const Port=process.env.Port||3000
const user =require("./Users")
mongoose.connect("mongodb://localhost:27017")
app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(Port,()=>{
    console.log("server ready");
})