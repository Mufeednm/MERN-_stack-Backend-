const mongoose = require("mongoose")
const express= require("express")
const app=express()
app.use(express.json())
const dotenv=require("dotenv").config()
const Port=process.env.Port||3000
const user =require("./Users")

mongoose.connect("mongodb://localhost:27017/register")
.then(() => console.log("DB connected"))
.catch((error) => console.log(error))



app.post("/user", async (req,res)=>{

        const {name,age,company}=req.body

        console.log(req.body);

        let usr = await user.create({
            name:name,
            age:age,
            company:company

        })
        await usr.save()

        res.status(201).json({message: "created new user"})

})
app.get("/", async(req,res)=>{
 const allUser = await user.find()
 res.status(200).send(allUser) 
})

app.listen(Port,()=>{
    console.log("server ready");
})