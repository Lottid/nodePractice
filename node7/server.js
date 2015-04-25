var http = require('http');
var url = require('url');

function serverStart(route, handle) {
	http.createServer(function(req, res) {
		var pathname = url.parse(req.url).pathname;
		//console.log(pathname);
		console.log('http request for ' + pathname + ' recieved');
		route(handle, pathname, res, req);
	}).listen(3000, '127.0.0.1');
	console.log('http server start on port 3000');
}
exports.serverStart = serverStart;