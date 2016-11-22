function findElement(arr, func) {
    var res;
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            res = arr[i];
            break;
        }
    }

    return res;
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
