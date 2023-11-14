/* 
Solution for Single Element in Sorted Array: You are given a sorted array consisting 
of only integers where every element appears exactly twice, except for one element 
which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

eg. Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

*/

function singleElementInSortedArray(nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
      return nums[mid];
    }
    if (
      (mid % 2 == 1 && nums[mid] === nums[mid - 1]) ||
      (mid % 2 == 0 && nums[mid] === nums[mid + 1])
    ) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
}

console.log(singleElementInSortedArray([1, 1, 2, 2, 3]));

/*
    Time Complexity: O(log(N))
*/
