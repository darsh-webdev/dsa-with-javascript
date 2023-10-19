/*
Solution for Count Odd Numbers in an Interval Range (inclusive).

eg: low = 3, high = 7 : Output = 3 : [3,5,7]
*/

function countOdd(low, high) {
  if (low % 2 === 0) low++;

  return low > high ? 0 : Math.floor((high - low) / 2 + 1);
}

console.log(countOdd(3, 7));

/*
   Time Complexity: O(1)
*/
