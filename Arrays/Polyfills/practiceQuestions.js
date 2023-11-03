// Question 1:
/* Given an array of objects representing books, filter out the books 
published before the year 2000 and return the array of book titles. */

const books = [
  { title: "Book 1", year: 1998 },
  { title: "Book 2", year: 2003 },
  { title: "Book 3", year: 1995 },
  { title: "Book 4", year: 2001 },
];

// Solution
const filteredBooks = books
  .filter((book) => book.year > 2000)
  .map((book) => book.title);

console.log(filteredBooks);

// Question 2:
/* Given an array of strings, capitalize the first letter of each word 
and return the modified array. */

const strings = ["hello world", "i am openai", "welcome to javascript"];

// Solution
const capitalizedStrings = strings.map((string) =>
  string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
);

console.log(capitalizedStrings);
