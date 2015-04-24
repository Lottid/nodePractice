var test = require('underscore');
console.log(test);
test.each([1,2,3],function(num) {
	console.log("underscore is con" + num);
});