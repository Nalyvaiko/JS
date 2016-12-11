const APIService = require('./apiservice');

var loadData = function(endpoint) {
    APIService.getData(endpoint1)
    .then((token) => {
        return JSON.parse(token)
    })
    .then((parsedToken) => {
        return APIService.getData(endpoint2)
    })
    .then((data) => {
        // Do something with data
    })
    .catch((error) => {
        //handle the error
    })
}

loadData('...');
