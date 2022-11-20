// Faster / Easier way to access/unpack variables from arrays, objects (later videos)

const fruits = ["orange", "banana", "apple"];
const friends = ["john", "jane", "jake", "jason", "jennie"];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

const [a, jane, c, , d, e] = friends;
console.log(a, jane, c, d, e);

let first = "bob";
let second = "john";

let temp = second;
second = first;
first = temp;

console.log(first, second);

[second, first] = [first, second];

console.log(first, second);
