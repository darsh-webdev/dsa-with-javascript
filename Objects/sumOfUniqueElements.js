/*
Solution for Sum of Unique Elements: Given an integer array nums. The unique 
elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

eg: Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.
*/

function sumOfUniqueElements(nums) {
  let numsObj = {};

  for (let i = 0; i < nums.length; i++) {
    numsObj[nums[i]] = (numsObj[nums[i]] || 0) + 1;
  }

  let uniqueElements = Object.entries(numsObj)
    .filter(([key, value]) => value === 1)
    .map(([key, value]) => parseInt(key));

  return uniqueElements.reduce((acc, num) => acc + num, 0);
}

console.log(sumOfUniqueElements([10, 6, 9, 6, 9, 6, 8, 7]));

/*
    Time Complexity: O(N)
*/
