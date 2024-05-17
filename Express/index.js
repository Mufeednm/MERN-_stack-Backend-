// const express = require("express")
// const app =express()
// const port= 3000
// const path=require("path")

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"intex.html"))

// })
// app.get("/Product",(req,res)=>{
//     res.send("Product page")

// })
// app.post("/Product",(req,res)=>{
//     res.send("Product created")

// })
// app.put("/Product",(req,res)=>{
//     res.send("Product update/ edit")

// })
// app.delete("/Product",(req,res)=>{
//     res.send("Product deleted")

// })
// app.listen(port,()=>{
//     console.log(`app listening on ${port}`);
// })
const express = require("express")
const app =express();
const multer=require('multer'); 
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'/uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload=multer({storage})
app.get("/",(req,res)=>{
    res.send("hello mufeed")
})
app.post("/api/upload",upload.single('file'), (req,res)=>{
    // res.send("upload succes fully")
    res.send("its commin")
})
const port= 3000;
app.listen(port,()=>{
    console.log(`listiong port ${port}`)
})