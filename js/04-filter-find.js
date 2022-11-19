// Filter - returns a new array, can manipulate the size of new array (unlike map), return based on condition
// Find - return single instance (object), returns first match, if no match - undefined

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

// Filter
const youngPeople = people.filter((person) => {
  return person.age < 30;
});

const developer = people.filter((person) => person.position === "CEO");
console.log(youngPeople);
console.log(developer);

// No Match
const seniorDev = people.filter((person) => person.position === "Senior Dev");
console.log(seniorDev);

// Find
const oldPeople = people.find((person) => {
  return person.age > 32;
});
console.log(oldPeople);

// No Match
const juniorDev = people.find((person) => person.position === "junior Dev");
console.log(juniorDev);

// Multiple matches - first match
const youngDev = people.find((person) => person.age < 30);
console.log(youngDev);
