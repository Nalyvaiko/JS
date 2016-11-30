function sym() {
    var setsArr = arguments.length === 1 ? arguments[0] : Array.apply(null, arguments);

    function arrDiff(arr1, arr2) {
        function arrUniqE(arr1, arr2) {
            return arr1.filter(function(el) {
                return arr2.indexOf(el) === -1;
            });
        }

        return arrUniqE(arr1, arr2).concat(arrUniqE(arr2, arr1));
    }

    return setsArr.reduce(arrDiff).filter(function(e, i, arr) {
        return arr.indexOf(e) === i;
    });
};

var res = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
console.log(res);
