"use strict";

const http  = require('http'),
      ROOT  = 'jsonplaceholder.typicode.com';

// Path is first c. line arg.
const item = process.argv[3],
      path = process.argv[2];

// Wrap Promise so we can create new requests to different endpoints
function makeRequest (path = "", item = "") {
  return new Promise(function (resolve, reject) {
    http.get({ 
      host : ROOT,
      path : `/${path}/${item}`
    }, function (response) {
    
      if (response.statusCode === 200) {
        let buffer = "";
    
        response.on('data', function (data) {
          if (data )
            buffer += data;
        });
    
        response.on('end', function () {
          resolve(JSON.parse(buffer));
        })
      } else {
        reject(`Error making connection: ${response.statusCode}.`);
      }
    })
  })
}

module.exports = makeRequest;
