const testArr = [
    "This Is Spinal Tap",
    "thisIsSpinalTap",
    "The_Andy_Griffith_Show",
    "Teletubbies say Eh-oh",
    "AllThe-small Things",
];

function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2'); // Camel case replace with spaces
    return str.toLowerCase().split(/\s+|_+/g).join('-'); // Split with spaces and underscores & join
};

testArr.forEach((phrase) => {
    console.log('"%s" will be: "%s"', phrase, spinalCase(phrase));
});

// 2d variant function
function spinalCase2(str) {
    var regex = /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return str.replace(regex, '-').toLowerCase();
};
