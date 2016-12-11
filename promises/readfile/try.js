"use strict";

// This example uses Node, and so won't run in the browser. 
const filename = 'text.txt', 
	   fs        = require('fs');

console.log('Reading file . . . ');

let file;
try {
  // Wrong filename. D'oh!
  file = fs.readFileSync(`${__dirname}/${filename + 'a'}`); 
  console.log( `Got it. Contents are: '${file}'` );
} catch (err) {
  console.log( `There was a/n ${err}: file is ${file}` );
}

console.log( 'Catching errors, like a bo$$.' );
