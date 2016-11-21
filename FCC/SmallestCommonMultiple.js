function smallestCommons(arr) {
    if (!(arr instanceof Array) || arr.length < 2) return;

    var a = arr[0];
    var b = arr[1];
    var max = a > b ? a : b;
    var min = a > b ? b : a;

    for (var i = min + 1; i < max; i++) {
        arr.push(i);
    }

    var go = true;
    var res = min;
    while (go) {
        res++;
        go = false;

        for (var j = 0; j < arr.length; j++) {
            if (res % arr[j] !== 0) {
                go = true;
                break;
            }
        }
    }

    return res;
};
console.log(smallestCommons([23, 18]));

// variant 2
function smallestCommons2(arr) {
  // Sort array from greater to lowest
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}
