/**
 * * Easy
 * * Write a function addBy that accepts a number n and returns a function. The returned function should add n to any number passed to it.
 * **/

const addBy = (n) => {
  return (x) => n + x;
};

const addBy10 = addBy(10);
console.log(addBy10(5)); // Output: 15
console.log(addBy10(10)); // Output: 20

/**
 * * Moderate
 * * Create a function once that accepts a function as an argument and returns a new function. The new function can only be called once, and subsequent calls should return the same result as the first call.
 * **/

const once = (fn) => {
  let hasBeenCalled = false;
  let result;

  return (...args) => {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn(...args);
    }
    return result;
  };
};
const onceAdd = (a, b) => a + b;
const counter = once(onceAdd);
console.log(counter(1, 2)); // Output: 3
console.log(counter(5, 5)); // Output: 3

/**
 * * Hard
 * * Implement a function createPrivateCounter that returns an object with two methods: increment and getCount. The counter should be private and only accessible through these methods.
 * **/
const createPrivateCounter = () => {
  let count = 0;

  const increment = () => {
    count++;
  };

  const getCount = () => {
    return count;
  };

  return { increment, getCount };
};

const privateCounter = createPrivateCounter();
privateCounter.increment();
console.log(privateCounter.getCount()); // Output: 1
privateCounter.increment();
console.log(privateCounter.getCount()); // Output: 2
