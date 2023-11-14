/* 
Solution for Search in Rotated Sorted Array: There is an integer array nums 
sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an 
unknown pivot index k (1 <= k < nums.length) such that the resulting array 
is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] 
(0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 
and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, 
return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

eg. Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

function searchInRotatedSortedArray(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    // when rotated array is divided into half, one half will ALWAYS be SORTED!

    // Check is Left side is Sorted
    if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && target <= nums[mid]) {
        //target is in left side
        end = mid - 1;
      } else {
        // target is in right side
        start = mid + 1;
      }
    }

    // If above check fails; Right Side is Sorted
    else {
      if (nums[mid] <= target && target <= nums[end]) {
        // target is in right side
        start = mid + 1;
      } else {
        // target is in left side
        end = mid - 1;
      }
    }
  }

  return -1;
}

console.log(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0));

/*
    Time Complexity: O(log(N))
*/
