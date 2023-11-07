/*
Solution for Sum Of Array Elements using Recursion.

eg: Input: 8
Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13..
f(0) = 0, f(1) = 1, f(n) = f(n - 1) + f(n - 2)
*/

function fibonaaci(n) {
  if (n < 2) return n;
  return fibonaaci(n - 1) + fibonaaci(n - 2);
}

console.log(fibonaaci(8));

/*
    Time Complexity: O(2^N)
    Space Complexity: O(N)
*/
