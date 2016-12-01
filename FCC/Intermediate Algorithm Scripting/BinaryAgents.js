function binaryAgent(str) {
    var res = '';
    var arr = str.split(/\s/);

    arr.forEach(function(el) {
        res += String.fromCharCode(parseInt(el, 2));
    })

    return res;
}
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// variant 2
function binaryAgent2(str) {
    return String.fromCharCode(...str.split(/\s/).map(function(char) {
        return parseInt(char, 2);
    }));
}
console.log(binaryAgent2("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
