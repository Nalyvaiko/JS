// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

function updateInventory(curInv, newInv) {
    newInv.forEach(function(eltNew) {
        var iSearch = -1;

        curInv.forEach(function(eltCur, iCur) {
            if (eltCur[1].indexOf(eltNew[1]) === 0) {
                iSearch = iCur;
            }
        });

        if (iSearch !== -1) {
            curInv[iSearch][0] += eltNew[0];
        } else {
            curInv.push(eltNew);
        }
    });

    return curInv.sort(function(a, b) {
        return a[1][0].charCodeAt() - b[1][0].charCodeAt();
    });
}

console.log(updateInventory(curInv, newInv));
