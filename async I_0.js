var fs = require ('fs')

path = process.argv[2];

fs.readFile(path, function(y, content) {
	var lines = content.toString().split('\n').length - 1
	console.log(lines)
})