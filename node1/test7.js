var http = require('http');

function fetchPage() {
	console.log("fetch page start");
	http.get({host:'github.com',path:'/?delay=3000'},function(res) {
		console.log("fetch page end");
	}).on('error',function(e) {
		console.log("Error is" + e);
	});
	
}

function fetchApi() {
	console.log("fetch api start");
	http.get({host:'github.com',path:'/?delay=3000'},function(res) {
		console.log("fetch api end");
	}).on('error',function(e) {
		console.log("Error is" + e);
	});
}

fetchPage();
fetchApi();
