function steamrollArray(arr) {
    var newArr = [];

    var flatten = function(arr) {
        if (Array.isArray(arr)) {
            arr.forEach(flatten);
        } else {
            newArr.push(arr);
        }
    }

    arr.forEach(flatten);
    return newArr;
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));

// using reduce
function steamrollArray2(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
  }, []);
}
console.log(steamrollArray2([1, [2], [3, [[4]]]]));
