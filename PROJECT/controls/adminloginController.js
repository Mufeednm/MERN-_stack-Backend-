import  JsonWebToken from 'jsonwebtoken';
import dotenv from "dotenv"
import User from '../models/userModel.js';
dotenv.config()
const jwt =JsonWebToken

// admin Login
 export const adminlogin =async (req,res)=>{
    const username =req.body.username
    const password=req.body.password
   
    if (username!==process.env.Admin_username || password !== process.env.Admin_password) {
        res.status(404).json({message:"wrong Admin"})
    }
    // token
    const token = jwt.sign({username},process.env.Admin_JWT_SECRET)
    // cokkie
    res.cookie('access_token' , token , {httpOnly:true })
    .json({message:"admin logined",token})

  
}
// Show all users
export  const allusers =async (req,res)=>{
    try {
        const allusers = await User.find()
        res.status(202).json(allusers)
    } catch (error) {
        
    }
}

