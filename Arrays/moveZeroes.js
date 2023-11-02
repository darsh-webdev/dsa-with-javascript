/*
Solution for Move Zeroes: Given an integer array nums, move all 0's 
to the end of it while maintaining the relative order of the 
non-zero elements.

Note: You must do this in-place without making a copy of the array.

eg: Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

function moveZeroes(nums) {
  let size = nums.length; // to track actual lenght of nums
  let ans = [];
  let numZeroes = 0;

  /* count number of zeroes*/
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      numZeroes += 1;
    }
  }

  /* make all non-zero numbers retain their position  */
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      ans.push(nums[i]);
    }
  }

  /* Add all zeroes to the end */
  while (numZeroes > 0) {
    ans.push(0);
    numZeroes--;
  }

  /* To make change to nums */
  for (let i = 0; i < size; i++) {
    nums[i] = ans[i];
  }
}

console.log(moveZeroes([0, 1, 0, 3, 12]));

/*
     Time Complexity: O(N)
  */
