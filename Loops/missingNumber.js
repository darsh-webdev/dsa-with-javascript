/*
Solution for Missing number in given array.

eg: [0,1,3]: n(length) = 3, Output: 2
*/

function missingNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return (arr.length * (arr.length + 1)) / 2 - sum;
}

console.log(missingNumber([1, 0, 3]));

/*
      Time Complexity: O(N)
  */
