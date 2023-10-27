/* 
Solution for Pivot Index: Given an array of integers nums, 
calculate the pivot index of this array.

Explanation:
The pivot index is the index where the sum of all the 
numbers strictly to the left of the index is equal to the 
sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, 
then the left sum is 0 because there are no elements to the left. 
This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

eg: Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
*/

function pivotIndex(nums) {
  let leftSum = 0;
  let rightSum = 0;

  /*
    sum up  all elements in the given array except index 0
    as sum of right elements. 
  */
  for (let i = 1; i < nums.length; i++) {
    rightSum += nums[i];
  }

  if (rightSum == 0) return 0; // as there are no elements on the left, leftSum will remain 0 so return 0 index,

  /*  keep reducing nums[i] from 'rightSum' and add nums[i] from 'leftSum' element until leftSum === rightSum */
  for (let i = 0, j = 1; j < nums.length; i++, j++) {
    rightSum -= nums[j];
    leftSum += nums[i];
    if (leftSum == rightSum) return i + 1;
  }

  return -1; // if there is no index that satisfies the conditions
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

/*
   Time Complexity: O(N)
*/
