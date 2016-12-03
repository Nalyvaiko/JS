function permAlone(str) {
    var arr = str.split('');
    var output = [];

    function swap(pos1, pos2, array) {
        var temp = array[pos1];
        array[pos1] = array[pos2];
        array[pos2] = temp;
    }

    function generateHeap(arr, n) {
        var n = n || arr.length;

        if (n === 1) {
            output.push(arr.slice());
        } else {
            for (var i = 0; i < n - 1; ++i) {
                generateHeap(arr, n - 1);

                if (n % 2 === 0) {
                    swap(i, n - 1, arr);
                } else {
                    swap(0, n - 1, arr);
                }
            }
            generateHeap(arr, n - 1);
        }
    }

    generateHeap(arr);
    return output;
}

console.log(permAlone('aab'));
