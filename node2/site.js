var http = require('http');

var option = {
	host : 'baidu.com',
	port: 80,
	path: '/'
}

http.get(option,function(res) {
	if(res.statusCode == 200) {
		console.log("succeess");
	} else {
		console.log("error");
	}
}).on('error',function(e) {
	console.log("error:" + e.message);
});