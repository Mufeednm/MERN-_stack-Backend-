const express = require("express")
const app = express()
const dotenc=require("dotenv").config()
const Port  = process.env.Port||3000
const mongoose= require("mongoose")
const  SIGNIN = require("./model/modelLogin")
const { create } = require("moongose/models/user_model")
const database =mongoose.connect("mongodb://localhost:27017/LOGINDATAS")
const bcrypt = require("bcrypt")
app.use(express.json())
app.get("/",(req,res)=>{

 res.send("hi")
})
app.post("/signIn",async(req,res)=>{
    const {name,password} = req.body
    
      const  salt = await bcrypt.genSalt()
      const hashpassword = await bcrypt.hash(password,salt)  
    
let Datasend= await SIGNIN.create({
 name : name ,
password:hashpassword
}) 

    res.status(201).json({message:"data send"})
    // console.log(userData);
})
app.post("/logIn",(req,res)=>{
    // console.log(userData);
    // const logindata=userData.find(userData.name==req.body.name && userData.password==req.body.password)
    // if (!logindata) {
    //     console.log("not found");
    // }
    // console.log("allow to join");
})


 app.listen(Port,()=>{console.log("server is ready");})