var http = require("http");

http.createServer(function(req,res) {
	res.writeHead(200,{
		'Content-Type':'text/plain',
		'test':'taozi'
	});
	res.end("Hello World!\n");
}).listen("3000","localhost");
console.log("success and running:127.0.0.1:3000");