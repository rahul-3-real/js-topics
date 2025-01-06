/**
 * * Easy
 * * Write a function that greets a user. If no name is provided, it should default to "Stranger."
 * **/
const greetUser = (user = "Stranger") => {
  console.log(`Hello ${user}`);
};
greetUser("Alice"); // Output: Hello Alice
greetUser(); // Output: Hello Stranger

/**
 * * Moderate
 * * Write a function to calculate the area of a rectangle. If only one argument is provided, assume it’s a square.
 * **/
const calculateRectangleArea = (width, height = undefined) => {
  if (height === undefined) {
    return width * width;
  } else {
    return width * height;
  }
};
console.log(calculateRectangleArea(5, 3)); // Output: 15
console.log(calculateRectangleArea(4)); // Output: 16

/**
 * * Hard
 * * Create a function that takes two arguments: a base price and a discount percentage. If no discount is provided, apply a default discount of 10%. Calculate the final price.
 * **/
const calculateFinalPrice = (basePrice, discount = 10) => {
  const discountAmount = (basePrice * discount) / 100;
  const finalPrice = basePrice - discountAmount;

  return finalPrice;
};
console.log(calculateFinalPrice(100)); // Output: 90 (10% discount)
console.log(calculateFinalPrice(100, 20)); // Output: 80 (20% discount)
