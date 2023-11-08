/*
Solution for Math.pow() functionality using Recursion.

e.g: Input: x = 2, n = 3
Output: 8
Explanation: 2 ^ 3 = 8
*/

function pow(x, n) {
  if (n < 1) return 1;
  return x * pow(x, n - 1);
}

console.log(pow(10, 3));

/*
    Time Complexity: O(N) where N is n
    Space Complexity: O(N)
*/
