const express = require("express")
const app =express()
const port= 3000

app.get("/",(req,res)=>{
    res.send("my name is mufeed")

})
app.get("/Product",(req,res)=>{
    res.send("Product page")

})
app.post("/Product",(req,res)=>{
    res.send("Product created")

})
app.put("/Product",(req,res)=>{
    res.send("Product update/ edit")

})
app.delete("/Product",(req,res)=>{
    res.send("Product deleted")

})
app.listen(port,()=>{
    console.log(`app listening on ${port}`);
})