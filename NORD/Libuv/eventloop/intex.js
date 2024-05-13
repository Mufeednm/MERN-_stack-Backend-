console.log("first");
process.nextTick(()=>{console.log("center");})
console.log("last");