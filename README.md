 Object process
 Exercise 1

Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout). 

 I/O!
 Exercise 2 

Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-line argument.



Here's the official solution in case you want to compare notes:
----------
  var fs = require('fs')
    
    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
    
    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1