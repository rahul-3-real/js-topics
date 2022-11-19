// Reduce
// Iterates, Callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration / value

const staff = [
  {
    name: "John",
    age: 35,
    position: "Developer",
    salary: 700,
  },
  {
    name: "Jane",
    age: 23,
    position: "Designer",
    salary: 800,
  },
  {
    name: "Jake",
    age: 27,
    position: "Marketing",
    salary: 500,
  },
  {
    name: "Jenni",
    age: 32,
    position: "CEO",
    salary: 900,
  },
];

const salaryTotal = staff.reduce((total, person) => {
  total += person.salary;
  return total;
}, 0);
console.log(salaryTotal);
