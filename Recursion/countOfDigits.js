/*
Solution for Count number of digits of a Number using Recursion.

e.g: Input: 453
Output: 3
*/

function countOfDigitsRecursion(num) {
  if (num < 10) {
    return 1;
  }
  return Math.floor(countOfDigitsRecursion(num / 10)) + 1;
}

console.log(countOfDigitsRecursion(453));

/*
    Time Complexity: O(N) where N is number of digits
    Space Complexity: O(N)
*/
