// * Example 1
/**
 * * Consider a simple problem like calculating the factorial of a number.
 * * The factorial of a number n (denoted as n!) is defined as:
 * * n! = n * (n-1) * (n-2) * ... * 1
 * * 0! = 1 (base case)
 * **/
const factorial = (n) => {
  if (n === 0) {
    // Base case
    return 1;
  } else {
    // Recursive case
    return n * factorial(n - 1);
  }
};
console.log(factorial(5)); // Output: 120

// * Example 2
/**
 * * Write a recursive function to compute the sum of all integers from 1 to n.
 * **/
const sum = (n) => {
  if (n === 1) {
    // Base case
    return 1;
  } else {
    // Recursive case
    return n + sum(n - 1);
  }
};
console.log(sum(5)); // Output: 15 (1 + 2 + 3 + 4 + 5)
