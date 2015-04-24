var fs = require("fs"),
	data = "桃子";
fs.writeFile("file.txt",data,function(err) {
	if(!err) {
		console.log("success");
	} else {
		throw err;
	}
});