/* 
Solution for Sqrt(x): Given a non-negative integer x, return the square root of x 
rounded down to the nearest integer. The returned integer should be non-negative 
as well.

You must not use any built-in exponent function or operator.

eg. Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to 
the nearest integer, 2 is returned.
*/

function sqrt(x) {
  if (x < 2) return x;
  let start = 0;
  let end = x;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
      return mid;
    } else if (mid * mid < x) {
      start = mid;
    } else {
      end = mid;
    }
  }
}

console.log(sqrt(225));

/*
    Time Complexity: O(log(N))
*/
