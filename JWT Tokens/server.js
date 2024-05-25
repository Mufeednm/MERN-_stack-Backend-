const express = require("express")
const app = express()
const dotenc=require("dotenv").config()
const Port  = process.env.Port||3000
const mongoose= require("mongoose")
const  SIGNIN = require("./model/modelLogin")
const { create } = require("moongose/models/user_model")
const database =mongoose.connect("mongodb://localhost:27017/LOGINDATAS")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
app.use(express.json())


app.post("/signIn",async(req,res)=>{
    const {name,email,password} = req.body
    
      const  salt = await bcrypt.genSalt()
      const hashpassword = await bcrypt.hash(password,salt)  
    
let Datasend= await SIGNIN.create({
 name : name ,
 email:email,
password:hashpassword
}) 

    res.status(201).json({message:"data send"})
    // console.log(userData);
})



app.post("/logIn", async (req,res)=>{
  
    const {email,password } = req.body;

const emailVarify=  await SIGNIN.findOne({email})
    if (!emailVarify) {
        return res.status(400).json({ message: "User not found" });
      
    }
const passwordVarify = bcrypt.compareSync(password,emailVarify.password)
if(!passwordVarify) return res.status(401).json({ staus: "error",  message: "Wrong credentials" });
    // console.log(passwordVarify);
    
    //jwt
    const token = jwt.sign({id : emailVarify._id},process.env.USER_JWT_SECRET,{expiresIn:"1h"})
          // cookie setting 
          res.cookie('access_token', token, {
             httpOnly: true})
          .status(200).json({ status: "Ok", message:"User login succfully", token })

})

app.get("/",(req,res)=>{
res.send("hello")
})


 app.listen(Port,()=>{console.log("server is ready");})