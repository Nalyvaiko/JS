"use strict";

// This example uses Node, so it won't run in the browser.
const filename      = 'text.txt', 
	    fs            = require('fs'),
	    getContents = function printContent (file) {
        try {
          return file.toString();
        } catch (TypeError) {
          return file; 
        } 
      }

console.log('Reading file . . . ');
console.log("=".repeat(76));

// readFile executes ASYNCHRONOUSLY. 
//   The program will continue to execute past LINE A while 
//   readFile does its business. We'll talk about callbacks in detail
//   soon -- for now, just pay mind to the the order of the log
//   statements.
let file;
fs.readFile(`${__dirname}/${filename}`, function (err, contents) {
  file = contents;
  console.log( `Uh, actually, now I'm done. Contents are: ${ getContents(file) }`);
}); // LINE A

// These will ALWAYS print BEFORE the file read is complete.

// Well, that's both misleading and useless.
console.log(`Done reading file. Contents are: ${getContents(file)}`); 
console.log("=".repeat(76));
