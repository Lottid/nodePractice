var http = require("http");

http.createServer(function(req,res) {
	res.writeHead(301,{
		'Location':'http://github.com'
	});
	res.end();
}).listen("3000","localhost");
console.log("success and running:127.0.0.1:3000");