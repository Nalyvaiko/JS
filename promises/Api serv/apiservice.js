class APIService {
    getData(endpoint) {
        var deferred = Promise.defer();

        fetch(endpoint, fetchConfig)
        .then((data) => {
            deferred.resolve(data)
        })

        return deferred.promise
    }
}

module.exports = new APIService
