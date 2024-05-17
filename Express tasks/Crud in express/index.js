const express =require("express") 
const dotenv= require("dotenv")
dotenv.config();
const app =express()
 
app.get("/",(req,res)=>{
    res.send("yaa its me");

})
const port = process.env.PORT || 3010;
app.listen(port,()=>{
    console.log(`this running in ${port}`);
})