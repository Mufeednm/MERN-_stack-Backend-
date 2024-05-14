const dotenv = require('dotenv')
const data = require("./db/user.json")
var bodyParser = require('body-parser')

const jsonparcer= bodyParser.json()

dotenv.config()


const PORT  = process.env.PORT || 3000;

 const http = require ("http")
 const server = http.createServer((req,res)=>{
    if (req.method==="GET") {
        res.write(JSON.stringify(data) )
        res.end()

    }
    else if (req.method==="POST" && req.url==="/Add") {
      jsonparcer((req,res)=>{

          
          const { name, age, place } = req.body
          
          data.push({name, age, place});
          
          res.writeHead(201, {'Content-type':'application/json'});
          res.write(JSON.stringify(data))
          
          res.end()
        })
  

    }
   
 })


 server.listen(PORT,()=>  console.log(`Server running on http://localhost:${PORT}`) )