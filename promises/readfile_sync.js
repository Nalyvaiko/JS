"use strict";

// This example uses Node, and so won't run in the browser. 
const filename = 'text.txt', 
	   fs        = require('fs');

console.log('Reading file . . . ');

// readFileSync BLOCKS execution until it returns. 
//   The program will wait to execute anything else until this operation finishes. 
const file = fs.readFileSync(`${__dirname}/${filename}`); 

// This will ALWAYS print after readFileSync returns. . . 
console.log('Done reading file.');

// . . . And this will ALWAYS print the contents of 'file'.
console.log(`Contents: ${file.toString()}`); 
