var fs = require('fs');
fs.readFile('/node1/app.js',{encoding:'utf-8'} ,function (err, data) {
  if (err) throw err;
  console.log(data);
});