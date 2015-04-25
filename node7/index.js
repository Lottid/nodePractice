var server = require("./server");
console.log(server);
var router = require("./router");
var requestHandlers = require("./requestHandlers");
//console.log(server);
var handle = {}
//区分大小写的 
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.serverStart(router.route, handle);