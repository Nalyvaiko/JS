var testStr = 'Test regexp reg class';
var resSearch =  testStr.search(/reg/g);
var resMatch =  testStr.match(/reg(exp)/g);

function replacer(str, offset, s) {
    console.log('Найдено ' + str + ' на позиции ' + offset + ' в строке ' + s);
    return str.toUpperCase();
};
// var resFun = testStr.replace(/eg/gi, replacer);

function telephoneCheck(telNumber) {
    var regEx = /^(1\s?)?(\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/;
    return regEx.test(telNumber);
}

var validTelNums = [
    "1 555-555-5555",
    "1 (555) 555-5555",
    "5555555555",
    "555-555-5555",
    "(555)555-5555",
    "1(555)555-5555",
    "1 555 555 5555",
    "1 456 789 4444"
];

var invalidTelNums = [
    "555-5555",
    "5555555",
    "1 555)555-5555",
    "123**&!!asdf#",
    "55555555",
    "(6505552368)",
    "2 (757) 622-7382",
    "0 (757) 622-7382",
    "-1 (757) 622-7382",
    "2 757 622-7382",
    "10 (757) 622-7382",
    "27576227382",
    "(275)76227382",
    "2(757)6227382",
    "2(757)622-7382",
    "555)-555-5555",
    "(555-555-5555",
    "(555)5(55?)-5555"
];

console.log('--- Should return false: ');
invalidTelNums.forEach(function(elt) {
    console.log(elt, telephoneCheck(elt));
});
console.log('---');
console.log('--- Should return true: ');
validTelNums.forEach(function(elt) {
    console.log(elt, telephoneCheck(elt));
});
