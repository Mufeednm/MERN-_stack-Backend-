// // read File
var fs = require("fs");

// fs.readFile("./text.txt","utf-8",function(err,data){
//     // the f of read file should be caps
//     if (err) {
//         console.log("its error");
        
//     }
//     console.log(data);
// });


//  create file 
// fs.writeFile("new.txt","it is done by create file by mufeed musthafa", (err)=>{
//     if (err) {
//         console.log("its an eroor");
        
//     }
//     console.log("file created");
// })         Another way (appendFiles)
// fs.appendFile ("new.txt","it is done by create file by mufeed musthafa by append  \n", (err)=>{
//     if (err) {
//         console.log("its an eroor");
        
//     }
//     console.log("file created");})  

//  rename file 
// fs.rename("./text.txt","./Rename.txt", (err)=>{if (err) {console.log(err);
    
// }console.log("renamed");})


            // delete  file 
fs.unlink("./new.txt",(err)=>{if (err) {console.log(err);
    
}console.log("deleted"); })