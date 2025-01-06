/**
 * * Easy
 * * Use slice to get the first 3 elements from this array [10, 20, 30, 40, 50]
 * **/
const easyNumbers = [10, 20, 30, 40, 50];
const slicedNumbers = easyNumbers.slice(0, 3);
console.log(slicedNumbers);

/**
 * * Moderate
 * * Sort the following array of objects by age in descending order:  [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 20 },]
 * **/
const sortPeople = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];
sortPeople.sort((a, b) => b.age - a.age);
console.log(sortPeople);

/**
 * * Hard
 * * Use splice to replace all negative numbers in an array with 0 [5, -3, 8, -1, 0, -6]
 * **/
const hardNumbers = [5, -3, 8, -1, 0, -6];
for (let i = 0; i < hardNumbers.length; i++) {
  if (hardNumbers[i] < 0) {
    hardNumbers.splice(i, 1, 0);
  }
}
console.log(hardNumbers);
