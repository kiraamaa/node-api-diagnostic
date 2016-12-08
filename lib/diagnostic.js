// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs'); // jshint ignore: line

// had zero idea how to do this
// time boxed to work on it for 20/30 diagnostic minutes
// looked up rhjones answer and replicated that
// understand 80% of the solution
// do not feel confident whatsoever in creating this myself
const sumLines = (filename, callback) => {
  fs.readFile(filename, 'utf8', (err, lines) => {
    let numbers = lines.split('\n');

    let sum = numbers.reduce(function(prevLine, currLine) {
      if (isNaN(currLine)) {
        err = new Error('line is not number');
      }
      return prevLine + Number(currLine);
    }, 0);
    callback(err, sum);
  });
};

// const sumLines = (filename, callback) => {
//   fs.readFile(filename, 'utf8', (err, lines) => {
//     })
//     let sum = 0;
//     let i = 0;
//     process.argv.forEach(function(data){
//     i++;
//     if(i>=0){
//       sum+=Number(data);
//     }
//     });
//
//     if (err) throw err;
//
//     callback(err, sum);
// });
//
// };



// rhjones answer

// const sumLines = (filename, callback) => {
//   fs.readFile(filename, 'utf8', function(err, lines) {
//     let numbers = lines.split('\n');
//     let sum = numbers.reduce(function(prevLine, currLine) {
//       if (isNaN(currLine)) {
//         err = new Error('line not a number');
//       }
//       return prevLine + (+currLine);
//     }, 0);
//     callback(err, sum);
//   });
// };

module.exports = {
  sumLines,
};
