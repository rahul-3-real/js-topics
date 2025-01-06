/**
 * * Easy
 * * Use map to convert an array of strings to uppercase. ['apple', 'banana', 'cherry']
 * **/
const easyFruitsList = ["apple", "banana", "cherry"];
const upperCaseFruitList = easyFruitsList.map((fruit) => {
  return fruit.toUpperCase();
});
console.log(upperCaseFruitList);

/**
 * * Moderate
 * * Use filter to extract numbers greater than 50 from an array. [10, 55, 60, 30, 90]
 * **/
const moderateNumbersList = [10, 55, 60, 30, 90];
const filteredNumbers = moderateNumbersList.filter((number) => number > 50);
console.log(filteredNumbers);

/**
 * * Hard
 * * Use reduce to count the occurrences of each element in an array. ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
 * **/
const hardFruitList = ["apple", "banana", "apple", "orange", "banana", "apple"];
const reducedFruitList = hardFruitList.reduce((acc, fruit) => {
  if (acc[fruit]) {
    acc[fruit]++;
  } else {
    acc[fruit] = 1;
  }
  return acc;
}, {});
console.log(reducedFruitList);
