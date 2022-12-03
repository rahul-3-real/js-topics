const makeUpperCase = (value) => {
  console.log(value.toUpperCase());
};
// makeUpperCase("john");

const reverseString = (value) => {
  console.log(value.split("").reverse().join(""));
};

const handleName = (name, cb) => {
  const fullName = `${name} doe`;
  cb(fullName);
};

// handleName("john", makeUpperCase);
// handleName("john", reverseString);

handleName("jane", (value) => console.log(value));

// Array methods, setTimeout, event listeners
