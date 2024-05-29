import express from "express"
const app = express()
 
app.use(express.json)
const adminAddproduct =(req,res,next)=>{
      const {title,description,price,category} = req.body;
    



}
