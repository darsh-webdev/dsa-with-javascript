/*
Solution for Unique Number of Occurences: Given an array of integers arr, 
return true if the number of occurrences of each value in the array is unique 
or false otherwise.

eg: Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. 
No two values have the same number of occurrences.
*/

function uniqueOccurences(arr) {
  let numObj = {};

  for (let i = 0; i < arr.length; i++) {
    numObj[arr[i]] = (numObj[arr[i]] || 0) + 1;
  }

  let occurences = Object.values(numObj).sort();
  for (let i = 0; i < occurences.length - 1; i++) {
    if (occurences[i] === occurences[i + 1]) return false;
  }

  return true;
}

console.log(uniqueOccurences([1, 2, 2, 1, 1, 3]));

/*
    Time Complexity: O(N)
*/
