/**
 * * Easy
 * * Write an IIFE that logs the current date and time.
 * **/

(() => {
  const currentDate = new Date();
  console.log(currentDate);
})();

/**
 * * Moderate
 * * Create an IIFE that accepts two parameters: a name and an age, and logs a message "Hello, [name], you are [age] years old."
 * **/

(() => {
  const name = "John Doe";
  const age = 30;
  console.log(`Hello, ${name}, you are ${age} years old.`);
})();

/**
 * * Hard
 * * Use an IIFE to create a counter. The counter should start from a given number and increment by one every time the IIFE is invoked, but without exposing the counter variable to the global scope.
 * **/
const counter = ((initialValue) => {
  let count = initialValue;

  return () => {
    count++;
    return count;
  };
})(5);
console.log(counter()); // 6 (increments by 1)
console.log(counter()); // 7 (increments by 1)
console.log(counter()); // 8 (increments by 1)
