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
app.get("/", async (req,res)=>{
const serverData = await SIGNIN.find()
 res.send( "hello ")
 console.log(serverData);
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
app.post("/logIn", async (req,res)=>{
  
    const { name, password } = req.body;

    const logindata=  await SIGNIN.findOne(name)
    if (!logindata) {
        return res.status(400).json({ message: "User not found" });
      
    }
    console.log("user found");
    
})


 app.listen(Port,()=>{console.log("server is ready");})