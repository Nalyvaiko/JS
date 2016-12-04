function permAlone(str) {
    var arr = str.split('');
    var permutations = [];

    function swap(pos1, pos2, array) {
        var temp = array[pos1];
        array[pos1] = array[pos2];
        array[pos2] = temp;
    }

    function generateHeap(arr, n) {
        n = n || arr.length;

        if (n === 1) {
            permutations.push(arr.slice().join(''));
        } else {
            for (var i = 0; i < n - 1; ++i) {
                generateHeap(arr, n - 1);
                swap(n % 2 === 0 ? i : 0, n - 1, arr);
            }
            generateHeap(arr, n - 1);
        }
    }
    generateHeap(arr);

    var regex = /(.)\1{1,}/;

    return permutations.filter(function(elt) {
        return !regex.test(elt);
    }).length;
}

console.log(permAlone('aab'));

// Variant 2
function permAlone2(str) {

  // Create a regex to match repeated consecutive characters.
  var regex = /(.)\1+/g;

  // Split the string into an array of characters.
  var arr = str.split('');
  var permutations = [];
  var tmp;

  // Return 0 if str contains same character.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // Function to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  // Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(''));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  // Return how many have no repetitions.
  return filtered.length;
}
