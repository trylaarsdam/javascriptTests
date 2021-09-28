var json = {
	name: "todd",
	data: "123456789",
	test: "this is a test"
}

var keys = Object.keys(json);
var vals = Object.values(json);

console.log(keys);

for(var key in keys) {
	console.log(keys[key]);
	console.log(json[keys[key]]);
}

