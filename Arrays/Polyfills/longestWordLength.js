/* Given an array of strings, find the longest word and return its length */

const words = ["apple", "watermelon", "cherry", "grapefruit", "dragonfruit"];

const longestWordLength = words.reduce((maxLength, word) => {
  const currentLength = word.length;

  return currentLength > maxLength ? currentLength : maxLength;
}, 0);

console.log(longestWordLength);

/* Given an array of strings, find the longest word */

const longestWord = words.reduce((longest, word) => {
  return word.length > longest.length ? word : longest;
}, "");

console.log(longestWord);
