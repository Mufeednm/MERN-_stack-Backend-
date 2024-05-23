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

app.put("/user/:id",async (req,res)=>{
const id = req.params.id
const find = await user.findById(id)
const updateuser=find
const {name,age,company}  = req.body;
if(name)updateuser.name=name
if(age)updateuser.age=age
if(company)updateuser.company=company
// console.log(find);
await updateuser.save()
res.status(201).json({message: "created new user"})
})
app.get("/", async(req,res)=>{
    const allUser = await user.find()
    res.status(200).send(allUser) 
    // console.log(allUser);
   })


   app.delete("/user/delete/:id",async(req,res)=>{
       const deleteid = req.params.id
    const allUsers= await user.findByIdAndDelete(deleteid)


if (!allUsers) {
 
    res.status(404).json({ message: "User not found" });
}
res.status(200).json({ message: "User deleted suceesss" });


// console.log(updateduser);
console.log(allUsers);
   })
   






app.listen(Port,()=>{
    console.log("server ready");
})