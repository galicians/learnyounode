var fs = require('fs')

contentFile = fs.readFileSync(process.argv[2]).toString()

var numberLines = contentFile.split('\n').length - 1

console.log(numberLines)