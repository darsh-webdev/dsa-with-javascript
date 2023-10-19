/*
Solution for Power of Two.
Given an integer n, return true if it is a power of two. Otherwise, return false.


eg: n = 1
Output = true
2^0 = 1
*/

function powerOfTwo(n) {
  if (n === 0) return false;

  while (n !== 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }

  return true;
}

console.log(powerOfTwo(4));

/*
    Time Complexity: O(log(N))
*/
