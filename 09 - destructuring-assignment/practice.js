/**
 * * Easy
 * * Destructure the following array into firstName and lastName const user = ['John', 'Doe'];
 * **/
const easyUser = ["John", "Doe"];
const [firstName, lastName] = easyUser;
console.log(firstName, lastName);

/**
 * * Moderate
 * *  Destructure the following object to get title and author, and set publishedYear to a default value of 2021 const book = { title: 'JavaScript Basics', author: 'Alice' };
 * **/
const moderateBook = { title: "JavaScript Basics", author: "Alice" };
const { title, author, publishedYear = 2021 } = moderateBook;
console.log(title, author, publishedYear);

/**
 * * Hard
 * * Destructure the following object to extract name, city, and postalCode from the nested address object
 * **/
const hardUser = {
  name: "Bob",
  age: 30,
  address: {
    street: "456 Elm St",
    city: "Metropolis",
    postalCode: "12345",
  },
};
const {
  name,
  address: { city, postalCode },
} = hardUser;
console.log(name, city, postalCode);
