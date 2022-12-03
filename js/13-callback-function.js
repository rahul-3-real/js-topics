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

// Callback Hell
const btn = document.querySelector("body");
btn.addEventListener("click", () => {
  setTimeout(() => {
    console.log("First");
    setTimeout(() => {
      console.log("Second");
      setTimeout(() => {
        console.log("Third");
      }, 2000);
    }, 3000);
  }, 1000);
});
