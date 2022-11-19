// do notation
const person = {
  name: "john",
};
console.log(person.name);
person.age = 35;
console.log(person);

// square bracket notation
const items = {
  "featured-items": ["item1", "item2"],
};
console.log(items["featured-items"]);

let appState = "loading";
appState = "error";
let keyState = "computer";
const app = {
  [appState]: true,
};
app[keyState] = "Microsoft";
console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};
const updateState = (key, value) => {
  state[key] = value;
};
updateState("loading", false);
updateState("name", "John");
updateState("job", "Developer");
updateState("age", 35);
updateState("products", []);
console.log(state);
