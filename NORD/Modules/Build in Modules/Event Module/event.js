const Eventhandler= require("node:events");
const emitter = new Eventhandler();

emitter.once("hello guys", function () {
    console.log(
        "get lost"
        );
        
    })
    emitter.emit("hello guys")