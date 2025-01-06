# Sorting and Merging

In JavaScript, arrays come with various methods for sorting, merging, and manipulating data. Let’s break down the methods **sort**, **concat**, **slice**, and **splice**, along with how they work and their use cases.

### **1. sort**

The `sort` method sorts the elements of an array in place and returns the array. By default, it sorts elements as strings in ascending order. To sort numbers or customize the sorting logic, you must provide a comparison function.

```
const numbers = [10, 5, 8, 1, 7];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 5, 7, 8, 10]
```

### **2. concat**

The `concat` method merges two or more arrays and returns a new array. The original arrays are not modified.

```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = arr1.concat(arr2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
```

### **3. slice**

The `slice` method returns a shallow copy of a portion of an array. It does not modify the original array.

```
const numbers = [1, 2, 3, 4, 5];
const sliced = numbers.slice(1, 4);
console.log(sliced); // Output: [2, 3, 4]
```

### **4. splice**

The `splice` method changes the contents of an array by removing or replacing existing elements and/or adding new elements. It modifies the original array and returns an array of removed elements.

```
const fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(1, 2, 'blueberry', 'blackberry');
console.log(fruits); // Output: ['apple', 'blueberry', 'blackberry', 'date']
```

### Comparison Table

| Method   | Modifies Original Array? | Returns                   | Purpose                                      |
| -------- | ------------------------ | ------------------------- | -------------------------------------------- |
| `sort`   | Yes                      | Original array            | Sort array elements in place                 |
| `concat` | No                       | New array                 | Merge arrays                                 |
| `slice`  | No                       | New array                 | Extract a portion of an array                |
| `splice` | Yes                      | Array of removed elements | Add, remove, or replace elements in an array |
