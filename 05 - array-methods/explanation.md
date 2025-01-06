# Array Methods

JavaScript provides several powerful methods for working with arrays. Let's explore the internal working and use cases of **map**, **filter**, **reduce**, **forEach**, **find**, **some**, and **every**.

### **1. map**

The `map` method creates a new array by applying a provided function to each element of the original array. It does not modify the original array.

```
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16]
```

### **2. filter**

The `filter` method creates a new array with elements that pass the test implemented by the provided function. The original array remains unchanged.

```
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

### **3. reduce**

The `reduce` method applies a reducer function to each element of the array, resulting in a single accumulated value. It can process the array elements from left to right.

```
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
```

### **4. forEach**

The `forEach` method executes a provided function once for each array element. It does not return a new array, and it doesn't stop or break a loop.

```
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log(fruit));
// Output:
// apple
// banana
// cherry
```

### **5. find**

The `find` method returns the first element in the array that satisfies the provided test function. If no element matches, it returns `undefined`.

```
const numbers = [1, 3, 5, 6, 7];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // Output: 6
```

### **6. some**

The `some` method checks if at least one element in the array passes the test implemented by the provided function. It returns `true` or `false`.

```
const numbers = [1, 2, 3, -4, 5];
const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative); // Output: true
```

### **7. every**

The `every` method checks if all elements in the array pass the test implemented by the provided function. It returns `true` or `false`.

```
const numbers = [1, 2, 3, 4];
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // Output: true
```

### Comparison Table

| Method    | Returns                  | Modifies Original Array? | Purpose                                    |
| --------- | ------------------------ | ------------------------ | ------------------------------------------ |
| `map`     | New array                | No                       | Transform elements of an array             |
| `filter`  | New array                | No                       | Select elements based on a condition       |
| `reduce`  | Single value             | No                       | Accumulate array elements into one value   |
| `forEach` | `undefined`              | No                       | Execute a function for each element        |
| `find`    | First matching element   | No                       | Find the first element that meets a test   |
| `some`    | Boolean (`true`/`false`) | No                       | Check if at least one element meets a test |
| `every`   | Boolean (`true`/`false`) | No                       | Check if all elements meet a test          |
