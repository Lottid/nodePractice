var http = require("http"),
	urls = ['baidu.com','www.360.cn','github.com','google.cn','liluo.me','hao.360.cn'];
function fetchPage(url) {
	var start = new Date();
	http.get({host:url},function(res) {
		console.log("Got response" + url);
		console.log("require took",new Date() - start,"ms");
	});
}
for (var i = 0; i < urls.length; i++) {
	fetchPage(urls[i]);
};