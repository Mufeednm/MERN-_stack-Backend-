import  express from "express";
import User from '../models/Users.js'
import authjoi from "../validation/authJOI.js";
import bcrypt from "bcrypt";
const app =express()
app.use(express.json())

export const SignIn =async(req,res,next)=>{
// try {
//     const {username, email,passsword } = req.body;
//     if (!username&&!email&&!passsword) {
//       return res.status(400).json({ message: "Name is required" });
//     }
//     console.log(username,email,passsword);
//     res.status(200).json({ message: "OK",username, email,passsword });
// } catch (error) {
//     next(error);
// }

// }
try {
    const validuser=  await authjoi.validateAsync(req.body);
    const hashpasssword = bcrypt.hashSync(validuser.password,10)
    console.log(validuser);
// send to DB
const newUser= new User({
    username:validuser.username,
    email:validuser.email,
    password:hashpasssword

})
await newUser.save();

} catch (error) {
    next(error)
}
}
