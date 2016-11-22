function dropElements(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr.slice(i);
        }
    }

    return [];
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2; }));
