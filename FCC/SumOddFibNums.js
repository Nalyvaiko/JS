const testArr = [
    1,
    1000,
    4000000,
    4,
    75024,
    75025
];

function sumFibs(num) {
    let fiboArr = [0, 1];
    let sum = 1;

    for (let i = 2; i <= num; i++) {
        let fiboNum = fiboArr[i - 1] + fiboArr[i - 2];
        fiboArr.push(fiboNum);

        if (fiboNum <= num) {
            sum += fiboNum % 2 !== 0 ? fiboNum : 0;
        } else {
            return sum;
        }
    }
};

console.log(sumFibs(10));

// testArr.forEach((number) => {
//     console.log('The sum of all odd Fibonacci ' + number + ' is: ' + sumFibs(number));
// });

// recursive function to find the fibo num
function fibonacci(n) {
   return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2);
};
console.log('The Fibo Num of 10 is: ', fibonacci(10));



// Basic
function sumFibs2(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}
// Int
function sumFibs3(num) {
  // create an array of fib numbers till num
  var arrFib = [1];
  for (var i = 1; i <=num;) {
      arrFib.push(i);
      i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
  }

  // return the sum of odd numbers from the array
  var res = arrFib.reduce(function(prev, curr) {
      if (curr%2 !== 0) return prev + curr;
      else return prev;
    });

  return res;
}
