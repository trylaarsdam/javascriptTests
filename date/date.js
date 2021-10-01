var stdio = require('stdio');
var ops = stdio.getopt({
	'start': {args:1, required: true},
	'end': {args:1, required: true}
});

var date = (new Date(parseInt(ops.start))).toISOString()
console.log(date);
