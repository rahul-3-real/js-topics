/**
 * * Easy
 * * Create a string using template literals to print: Name: Alice Age: 25 Location: Wonderland
 * **/
const easyname = "Alice";
const easyage = "25";
const easylocation = "Wonderland";
const easyString = `Hello, My Name is ${easyname}, I am ${easyage} years old and I live in ${easylocation}.`;
console.log(easyString);

/**
 * * Moderate
 * * Write a function that takes a name and age as arguments and returns a greeting using template literals: greet('John', 30);
 * **/

function moderateGreet(name, age) {
  return `Hello, My Name is ${name}, I am ${age} years old.`;
}
console.log(moderateGreet("John", 30));

/**
 * * Hard
 * * Implement a tagged template function to format a price value
 * **/
const hardPrice = (strings, value) => {
  const formattedValue = `$${value.toFixed(2)}`;
  return `${strings[0]}${formattedValue}${strings[1] || ""}`;
};
const price = 225.5;
const result = hardPrice`The total is ${price}.`;
console.log(result);
