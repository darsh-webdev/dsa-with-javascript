/*

Solution for Number of Good Pairs: Given an array of integers nums, return the 
number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

e.g: Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
*/

function noOfGoodPairs(nums) {
  let pairs = {};
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (pairs.hasOwnProperty(nums[i])) {
      count += pairs[nums[i]];
    }

    pairs[nums[i]] = (pairs[nums[i]] || 0) + 1;
  }

  return count;
}

let nums = [1, 2, 3];

console.log(noOfGoodPairs(nums));

/*
    Time Complexity: O(N)
*/
