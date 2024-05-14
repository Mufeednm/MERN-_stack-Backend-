const dotenv = require('dotenv')
const data = require("./db/user.json")
var bodyParser = require('body-parser')
const file = require("fs")
const crypto= require ("crypto")

const jsonparcer= bodyParser.json()

dotenv.config()


const PORT  = process.env.PORT || 3000;

 const http = require ("http")
const { log, error } = require('console')
 const server = http.createServer((req,res)=>{
    if (req.method==="GET") {
        res.write(JSON.stringify(data) )
        res.end()

    }
    else if (req.method==="POST" && req.url==="/Add") {
      jsonparcer(req,res , () =>{

          
          const {  name, age, place } = req.body
          
          const id =crypto.randomUUID()

          data.push({id, name, age, place});
          
          file.writeFile("./db/user.json", JSON.stringify(data), (error)=>{
         if (error) {
          console.log( "error in file.writefile");
          
         }
          })
     
          res.writeHead(201, {'Content-type':'application/json'});
          res.write(JSON.stringify(data))
          
          res.end()
        })
  

    }else if (req.method==="DELETE" && req.url==="/delete") {
  
         file.writeFile("./db/user.json")
      
  
      res.writeHead(200, { 'Content-type': 'application/json' });
      res.write(JSON.stringify(data));
      res.end(); 
    }
   
 })


 server.listen(PORT,()=>  console.log(`Server running on http://localhost:${PORT}`) )