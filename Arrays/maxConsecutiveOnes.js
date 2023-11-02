/*
Solution for Max Consecutive Ones: Given a binary array nums, 
return the maximum number of consecutive 1's in the array.

Note: nums[i] is either 0 or 1.

eg: Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. 
The maximum number of consecutive 1s is 3.
*/

function maxConsecutiveOnes(nums) {
  let current = 0,
    max = 0;

  for (let i = 0; i < nums.length; i++) {
    current = nums[i] === 1 ? current + 1 : 0; // if current value is 1 increment current else reset to 0.

    max = current > max ? current : max; // if current iteration is greater than max update max else keep max value same.
  }

  return max;
}

console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1]));

/*
    Time Complexity: O(N)
*/
