const { log } = require("console")


const a = require("http")


let arr = {
    name: "sfvan",
    age: 22,
}

const server = a.createServer((req,res)=>{
    if(req.method === "GET" ){
    res.writeHead(200, {'Content-type':'text/json'});
    
    res.write(JSON.stringify(arr))
    res.end()
}
    
    else if (req.method === "POST" && req.url === "/post"){
       

            let newName = "mlp"
              arr.address =  newName;

              res.writeHead(201, {'Content-type':'text/json'});
    
    res.write(JSON.stringify(arr))

              res.end()
        
    }
    else if (req.method === "PUT" && req.url === "/edit"){
       

        let newName = "mufeed"
          arr.name =  newName;

          res.writeHead(200, {'Content-type':'text/json'});

res.write(JSON.stringify(arr))

          res.end()
    
}

else if (req.method === "DELETE" && req.url === "/delete"){
       

   
delete arr.name

res.writeHead(204)
      res.end()

} 
else {
    // For any other request method or route, respond with 404 Not Found
    res.writeHead(404, { 'Content-type': 'text/plain' });
    res.write("404 Not Found");
    res.end();
}
})






server.listen(3000,()=>{
    console.log("server readd");
} )