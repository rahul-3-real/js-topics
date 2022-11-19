// Reduce - Object

// Cart Example
const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 7,
  },
  {
    title: "Google Pixel",
    price: 499.99,
    amount: 4,
  },
  {
    title: "Apple IPhone X",
    price: 1099.99,
    amount: 2,
  },
  {
    title: "One Plus Nord",
    price: 799.99,
    amount: 5,
  },
];

let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    // Count Items
    total.totalItems += amount;

    // Cart Total
    total.cartTotal += amount * price;

    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);
cartTotal = parseFloat(cartTotal.toFixed(2));
console.log(totalItems, cartTotal);

// Github Repos Example
const url = "https://api.github.com/users/rahul-3-real/repos?per_page=100";

const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.reduce((total, repo) => {
    const { language } = repo;
    // if (total[language]) {
    //   total[language] = total[language] + 1;
    // } else {
    //   total[language] = 1;
    // }

    if (language) {
      total[language] = total[language] + 1 || 1;
    }
    return total;
  }, {});
  console.log(newData);
};
fetchRepos();
