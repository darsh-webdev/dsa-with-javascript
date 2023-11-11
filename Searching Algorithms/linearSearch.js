/*---------- Linear Search in JS -----------*/

const arr = [1, 2, 3, 4, 5, 8, 9, 0];

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};
console.log(linearSearch(arr, 4));

// Array Methods using Linear Search
console.log(arr.includes(9));
console.log(arr.indexOf(9));
console.log(arr.find((num) => num > 8));
console.log(arr.findIndex((num) => num > 8));

// String Methods using Linear Search
const str = "Javascript";
console.log(str.match("script"));
console.log(str.search("script"));
console.log(str.indexOf("script"));
console.log(str.includes("script"));

