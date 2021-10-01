var ops = stdio.getopt({
	'start': {args:1, required: true},
	'end': {args:1, required: true}
});

var date = (new Date(start)).getDate()
console.log(date);
