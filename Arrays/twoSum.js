/*
Solution for Two Sum: Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

Note: Each Input has exactly one solution.

eg: Input: nums = [2,7,11,15], target = 9
Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])
*/

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        console.log(nums[i], nums[j]);
        return [i, j];
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));

/*
   Time Complexity: O(N^2)
*/
