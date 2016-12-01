function sumPrimes(num) {
    var arrPrimes = [];

    for (var i = 2; i <= num; i++) {
        var d = 2;
        while (i % d !== 0 && d < i) d++;
        if (i === d) arrPrimes.push(d);
    }

    return arrPrimes.reduce(function(prev, curr) {
        return prev + curr
    }, 0);
};

console.log(sumPrimes(977));
