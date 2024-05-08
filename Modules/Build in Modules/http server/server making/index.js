// const http = require ("node:http");

// const server = http.createServer((req,res)=>{
//     res.writeHead(200)
//     res.end("hello world");
// });
// server.listen(3001,()=>{
//     console.log("SERVER RUNNING ON TIMEj");
// })
//                   json server
                const http = require ("node:http");
                const { json } = require("stream/consumers");
                
                const server = http.createServer((req,res)=>{
                    const superhero ={
                        firstname:"mufeed",
                        lastname : "babu"
                    };
                
                    res.writeHead(200, {"content-type": "application/json" })
                    res.end(JSON.stringify(superhero))
                }) 
                server.listen(3000,()=>{
                    console.log("SERVER RUNNING ON TIMEj");
                })
    //   html response 
//     const http = require ("node:http");
//     const fs = require ("node:fs")
// const { json } = require("stream/consumers");

// const server = http.createServer((req,res)=>{
//     const superhero ={
//         firstname:"mufeed",
//         lastname : "babu"
//     };

//     res.writeHead(200, {"content-type": "text/html" })
//     fs.createReadStream("./index.html").pipe(res)
//     // const html = fs.readFileSync("./index.html", "utf-8")
//     // res.end(html);
// }) 
// server.listen(3000,()=>{
//     console.log("SERVER RUNNING ON TIMEj");
// })
        //   html+ js  changes
//         const http = require ("node:http");
//     const fs = require ("node:fs")
// const { json } = require("stream/consumers");

// const server = http.createServer((req,res)=>{
//     const superhero ="mufeed"

//     res.writeHead(200, {"content-type": "text/html" })
//     // fs.createReadStream("./index.html").pipe(res)
//     let html = fs.readFileSync("./index.html", "utf-8")
//     html=html.replace("{{name}}",superhero)
//     res.end(html);
// }) 
// server.listen(3000,()=>{
//     console.log("SERVER RUNNING ON TIMEj");
// })