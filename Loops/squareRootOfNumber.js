/*
Solution for Square Root of a Number.
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.


eg: n = 4
Output = 2
*/

function sqrtx(n) {
  if (n < 2) return n;

  for (let i = 2; i <= n; i++) {
    if (i * i === n) return i;

    if (i * i > n) return i - 1;
  }
}

console.log(sqrtx(4));

/*
    Time Complexity: O(log(N))
*/
