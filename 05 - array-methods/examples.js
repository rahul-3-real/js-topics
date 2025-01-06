/**
 * * map
 * * Convert an array of numbers to their squares.
 * **/
const mapNumbers = [1, 2, 3, 4];
const squares = mapNumbers.map((num) => num * num);
console.log(squares); // Output: [1, 4, 9, 16]

/**
 * * filter
 * * Filter out odd numbers from an array.
 * **/
const filterNumbers = [1, 2, 3, 4, 5];
const evenNumbers = filterNumbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

/**
 * * reduce
 * * Sum all numbers in an array.
 * **/
const reduceNumbers = [1, 2, 3, 4];
const sum = reduceNumbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10

/**
 * * forEach
 * * Log each element of an array.
 * **/
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => console.log(fruit));
// Output:
// apple
// banana
// cherry

/**
 * * find
 * * Find the first even number in an array.
 * **/
const findNumbers = [1, 3, 5, 6, 7];
const firstEven = findNumbers.find((num) => num % 2 === 0);
console.log(firstEven); // Output: 6

/**
 * * some
 * * Check if there is at least one negative number in an array.
 * **/
const someNumbers = [1, 2, 3, -4, 5];
const hasNegative = someNumbers.some((num) => num < 0);
console.log(hasNegative); // Output: true

/**
 * * every
 * * Check if all numbers in an array are positive.
 * **/
const everyNumbers = [1, 2, 3, 4];
const allPositive = everyNumbers.every((num) => num > 0);
console.log(allPositive); // Output: true
