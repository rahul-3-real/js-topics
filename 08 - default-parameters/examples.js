/**
 * * Example
 * * Calculate a total price with a default tax rate.
 * **/

function calculateTotal(price, taxRate = 0.1) {
  return price + price * taxRate;
}

console.log(calculateTotal(100)); // Output: 110 (uses default taxRate 0.1)
console.log(calculateTotal(100, 0.2)); // Output: 120 (uses provided taxRate 0.2)
