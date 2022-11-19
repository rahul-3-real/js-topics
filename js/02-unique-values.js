const Animes = [
  {
    name: "Naruto",
    genre: "Action",
  },
  {
    name: "Clay More",
    genre: "Drama",
  },
  {
    name: "Hunter X Hunter",
    genre: "Adventure",
  },
  {
    name: "Cowboy Bebop",
    genre: "Sci-Fi",
  },
  {
    name: "Dororo",
    genre: "Adventure",
  },
  {
    name: "Bleach",
    genre: "Fantasy",
  },
  {
    name: "Tokyo Ghoul",
    genre: "Fantasy",
  },
  {
    name: "Dragon Ball",
    genre: "Action",
  },
  {
    name: "AnoHana",
    genre: "Drama",
  },
  {
    name: "Komi Can't Communicate",
    genre: "Fantasy",
  },
];

// Map - get all instance
// new Set - narrow down
// ['all',...] - turns it back to Array

const genres = new Set(
  Animes.map((item) => {
    return item.genre;
  })
);

const list = ["all", ...genres];

console.log(genres);
console.log(list);
