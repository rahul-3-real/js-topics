/**
 * * Easy
 * * Write an arrow function that takes two numbers and returns their product.
 * **/
const multiply = (a, b) => a * b;
console.log(multiply(5, 3)); // Output: 15
console.log(multiply(2, 7)); // Output: 14
console.log(multiply(0, 10)); // Output: 0
console.log(multiply(10, 0)); // Output: 0
console.log(multiply(-2, -5)); // Output: 10

/**
 * * Moderate
 * * Create an arrow function to filter out all odd numbers from an array
 * **/
const filterOddNumbers = (arr) => arr.filter((num) => num % 2 === 0);
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
console.log(filterOddNumbers([1, 3, 5, 7, 9])); // Output: []
console.log(filterOddNumbers([])); // Output: []

/**
 * * Hard
 * * Write an arrow function that returns a greeting message using default parameters. If no name is passed, it should greet as "Hello, Guest!".
 * **/
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet()); // Output: "Hello, Guest!"
console.log(greet("John Doe")); // Output: "Hello, John Doe!"
console.log(greet(null)); // Output: "Hello, Guest!"
console.log(greet(undefined)); // Output: "Hello, Guest!"
console.log(greet(0)); // Output: "Hello, Guest!"
