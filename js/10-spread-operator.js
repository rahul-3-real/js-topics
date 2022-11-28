// Spread Operator...
// Allows and iterale to spread / expand individually inside reciever
// Split into single item and COPY them

const yt = "youtube";
const letters = [...yt];
console.log(letters);
const boys = ["john", "jason", "jake"];
const girls = ["jane", "jessica"];
const bestFriend = "Kelly";

const kids = [bestFriend, ...girls, ...boys];
console.log(kids);

// Reference
const friends = [...kids];
friends[0] = "Jimmy";
console.log(kids);
console.log(friends);

const person = { name: "John", age: 25 };
const newPerson = { ...person, city: "Thane", name: "Jane" };
console.log(person);
console.log(newPerson);

// ES2018 - ES8 Object
