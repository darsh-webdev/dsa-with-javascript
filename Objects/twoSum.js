/*
Solution for Two Sum: Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

Note: Each Input has exactly one solution.

eg: Input: nums = [2,7,11,15], target = 9
Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])
*/

function twoSum(nums, target) {
  let numsObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (numsObj.hasOwnProperty(target - nums[i])) {
      return [i, numsObj[target - nums[i]]];
    } else {
      numsObj[nums[i]] = i;
    }
  }
}

console.log(twoSum([3, 2, 4], 6));

/*
   Time Complexity: O(N)
*/
