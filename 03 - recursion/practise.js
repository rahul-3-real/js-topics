/**
 * * Easy
 * * Write a recursive function to find the greatest common divisor (GCD) of two numbers.
 * **/
const gcd = (a, b) => {
  // Base case: if b is 0, the GCD is a
  if (b === 0) {
    return a;
  }
  // Recursive case: gcd(b, a % b)
  return gcd(b, a % b);
};
console.log(gcd(48, 18)); // Output: 6
console.log(gcd(56, 98)); // Output: 14
console.log(gcd(101, 103)); // Output: 1 (prime numbers)

/**
 * * Moderate
 * * Implement a recursive function to calculate the nth Fibonacci number. The Fibonacci sequence is defined as:
 * * 1. Fib(0) = 0, Fib(1) = 1
 * * 2. Fib(n) = Fib(n-1) + Fib(n-2) for n > 1
 * **/
const fibonacci = (n) => {
  // Base cases
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(5)); // Output: 5 (0, 1, 1, 2, 3, 5)
console.log(fibonacci(10)); // Output: 55

/**
 * * Hard
 * * Write a recursive function to reverse a string (e.g., "hello" → "olleh") without using built-in methods.
 * **/
function reverseString(str) {
  // Base case: if the string is empty or has one character, return it as-is
  if (str.length <= 1) {
    return str;
  }
  // Recursive case: reverse the rest of the string and append the first character
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("a")); // Output: "a"
console.log(reverseString("")); // Output: ""
