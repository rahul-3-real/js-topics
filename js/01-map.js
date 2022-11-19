// Array
const people = [
  {
    name: "John",
    age: 35,
    position: "Developer",
  },
  {
    name: "Jane",
    age: 23,
    position: "Designer",
  },
  {
    name: "Jake",
    age: 27,
    position: "Marketing",
  },
  {
    name: "Jenni",
    age: 32,
    position: "CEO",
  },
];

// * Map
// Returns a new array
// Does not change the size of the original array (unlike filter)
// Uses value from original array while making new one

const names = people.map((person) => {
  return person.name;
});
const ages = people.map((person) => person.age);
const posiions = people.map((person) => person.position);

console.log(names);
console.log(ages);
console.log(posiions);

const newPeople = people.map((person) => {
  return {
    name: person.name.toUpperCase(),
    age: person.age * 2,
    position: `${person.position} Position`,
  };
});
console.log(newPeople);
