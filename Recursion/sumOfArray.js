/*
Solution for Fibonacci Number using Recursion.

e.g: Input: 8
Output: 13
Explanation: 0, 1, 1, 2, 3, 5, 8, 13
*/

function sumOfArray(arr) {
  if (arr.length === 0) return 0;
  const lastElement = arr.pop();
  return lastElement + sumOfArray(arr);
}

console.log(sumOfArray([1, 2, 3, 4, 5]));

/*
    Time Complexity: O(N)
    Space Complexity: O(N)
*/
