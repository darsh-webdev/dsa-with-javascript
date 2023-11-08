/*
Solution for Sum of digits of a Number using Recursion.

e.g: Input: 453
Output: 12
Explanation: 4 + 5 + 3 = 12
*/

function sumOfDigitsRecursion(num) {
  if (num <= 0) return 0;
  return Math.floor((num % 10) + sumOfDigitsRecursion(num / 10));
}

console.log(sumOfDigitsRecursion(453));

/*
    Time Complexity: O(N) where N is number of digits
    Space Complexity: O(N)
*/
