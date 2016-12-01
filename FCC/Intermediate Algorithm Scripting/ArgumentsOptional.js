function addTogether() {
    function checkNum(num) {
        return typeof num === 'number' ? num : undefined;
    }
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);

    if (arguments.length === 2) {
        return a && b ? a + b : undefined;
    } else if (arguments.length === 1) {
        return a ? function(b) {
            return checkNum(b) ? a + b : undefined;
        } : undefined;
    } else {
        return undefined;
    }
}

console.log(addTogether(2,3));
console.log(addTogether(1)(7));
console.log(addTogether());
console.log(addTogether(2)([3]));
