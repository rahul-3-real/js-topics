// Promises
// * To avoid callback hell

// async await
// consume/use promises

// Pending, Rejected, FulFilled

const value = 2;
const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);
  console.log(random);

  if (random === value) {
    resolve("Correct");
    console.log("Correct");
  } else {
    reject("Wrong");
    console.log("Wrong");
  }
});

promise.then((data) => console.log(data)).catch((err) => console.log(err));
