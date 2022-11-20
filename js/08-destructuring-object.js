// Faster / Easier way to access/unpack variables from arrays, objects (later videos)
// Order is not important in object destructuring

const person = {
  first: "John",
  last: "Doe",
  city: "China",
  sibling: {
    sister: "Jane",
  },
};

const {
  first,
  last,
  zip,
  city,
  sibling: { sister: xyz },
} = person;
console.log(first, last, zip, city, xyz);

const firstname = person.first;
const lastname = person.last;
const sister = person.sibling.sister;

console.log(firstname, lastname, sister);

const printPerson = ({ first, last, sibling: { sister } }) => {
  //   const {
  //     first,
  //     last,
  //     sibling: { sister },
  //   } = xyz;
  console.log(first, last, sister);
};
printPerson(person);
