/**
 * * sort
 * * Sort numbers in ascending order.
 * **/
const sortNumbers = [10, 5, 8, 1, 7];
sortNumbers.sort((a, b) => a - b);
console.log(sortNumbers); // Output: [1, 5, 7, 8, 10]

/**
 * * concat
 * * Merge two arrays
 * **/
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = arr1.concat(arr2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

/**
 * * slice
 * * Extract a portion of an array.
 * **/
const sliceNumbers = [1, 2, 3, 4, 5];
const sliced = sliceNumbers.slice(1, 4);
console.log(sliced); // Output: [2, 3, 4]

/**
 * * splice
 * * Remove and add elements.
 * **/
const fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(1, 2, "blueberry", "blackberry");
console.log(fruits); // Output: ['apple', 'blueberry', 'blackberry', 'date']
