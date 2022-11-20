// Rest Operator...
// gathers / collects item
// destructuring, functions
// placement important, careful with the same name
// rest when declare functions, spread when invoke the function

// Array
const fruits = ["apple", "banana", "orange", "kiwi"];
const [first, ...restOfTheFruits] = fruits;
console.log(first, restOfTheFruits);
const specificFruits = restOfTheFruits.find((fruit) => fruit === "kiwi");
console.log(specificFruits);

// Object
const person = { name: "john", lastname: "doe", job: "developer" };
const { name, ...rest } = person;
console.log(name, rest);

// Functions
const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const average =
    scores.reduce((total, item) => {
      return (total += item);
    }, 0) / scores.length;
  console.log(average);
};
getAverage(person.name, 98, 25, 27, 337, 24);
