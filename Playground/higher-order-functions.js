const add = (a, b) => a + b;
const square = (a) => a * a;

// Higher order function
const callAndLog = (func) => {
    return function() {
        const res = func.apply(null, arguments);
        console.log('Result is: ' + res);
        return res;
    };
};

console.log(add(99, 1));

const addAndLog = callAndLog(add);
console.log(addAndLog(33, 5));

const squareAndLog = callAndLog(square);
console.log(squareAndLog(3));

// function one(name, location) {
//     console.log(name, location);
// }
//
// function two() {
//     console.log('Args: ', arguments);
//     one.apply(null, arguments);
// }
//
// two('Angelica', 'Kiev');
