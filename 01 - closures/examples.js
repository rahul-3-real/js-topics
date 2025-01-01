// * Example 1
// * Here, count is preserved across function calls because the returned function forms a closure over count.

const createCounter = () => {
  let count = 0; // Outer variable
  return () => {
    count++; // Inner function accessing `count`
    return count;
  };
};

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

// * Example 2
/**
 * * Question:
 *  * Write a function createMultiplier that accepts a number n and returns a function.
 *  * The returned function should accept another number x and return the result of multiplying n and x.
 * **/

const createMultiplier = (n) => {
  return (x) => n * x;
};

const multiplyBy5 = createMultiplier(5);
console.log(multiplyBy5(3)); // Output: 15
console.log(multiplyBy5(10)); // Output: 50
