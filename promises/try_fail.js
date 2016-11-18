"use strict";

// This example uses Node, and so won't run in the browser. 
const filename = 'text.txt', 
	    fs       = require('fs');

console.log('Reading file . . . ');

let file;
try {
  // Wrong filename. D'oh!
  fs.readFile(`${__dirname}/${filename + 'a'}`, function (err, contents) {
    file = contents;
  });

  // This shouldn't run if file is undefined
  console.log( `Got it. Contents are: '${file}'` );
} catch (err) {
  // In this case, catch should run, but it never will.
  //   This is because readFile passes errors to the callback -- it does /not/
  //   throw them.
  console.log( `There was a/n ${err}: file is ${file}` );
}
