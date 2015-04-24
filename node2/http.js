var http = require("http");
http.createServer(function(req,res) {
	res.end("Hello World!\n");
}).listen("3000","localhost");
console.log("success and running:127.0.0.1:3000");