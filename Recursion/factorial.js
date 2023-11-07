/*
Solution for Factorial of Number using Recursion.

e.g: Input: n = 5
Output: 120
Explanation: 5! = 5*4*3*2*1 = 120 
*/

function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(5));

/*
  Time Complexity: O(N)
  Space Complexity: O(N)
*/
