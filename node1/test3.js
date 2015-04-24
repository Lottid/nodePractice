function sleep(time) {
	var start = new Date().getTime();
	while ((new Date().getTime() - start ) < time) {}
}

function fetchPage() {
	console.log("fetch page start");
	sleep(3000);
	console.log("fetch page end");
}

function fetchApi() {
	console.log("fetch api start");
	sleep(3000);
	console.log("fetch api end");
}

fetchPage();
fetchApi();
