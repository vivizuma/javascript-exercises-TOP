const getTheTitles = function (books) {
  let titles = [];
  let arr = [];
  titles = books.map((book) => {
    arr.push(book.title);
  });

  return arr;
};

const books = [
  {
    title: "Notes from the underground",
    author: "Fyodor Dostoyevsky",
  },
  {
    title: "Childhoods End",
    author: "Arthur C Clarke",
  },
];
getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;
