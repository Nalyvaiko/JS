// function add(a, b) {
//     return a + b;
// }
//
// console.log(add(2, 3));
//
// let toAdd = [9, 5];
// console.log(add(...toAdd));

// let groupA = ['Jen', 'Cory'];
// let groupB = ['Vikram'];
// let final = [...groupB, 3, ...groupA];
//
// console.log(final);

let person = ['Andrew', 25];
let personTwo = ['Jen', 29];
// Hi Andrew, you are 25
function greet (name, age) {
    console.log('Hi ' + name + ' you are ' + age);
}
greet(...person);
greet(...personTwo);

let names = ['Mike', 'Ben'];
let final = ['Andrew', ...names];

final.forEach((name) => {
    console.log('Hi ' + name);
});
