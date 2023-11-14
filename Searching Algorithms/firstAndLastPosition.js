/* 
Solution for Find First and Last Position of Element in Sorted Array: Given an array 
of integers nums sorted in non-decreasing order, find the starting and ending 
position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

eg. Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

*/

function firstAndLastPosition(nums, target) {
  const binarySearch = (nums, target, searchLast) => {
    let start = 0;
    let end = nums.length - 1;
    let position = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (nums[mid] === target) {
        position = mid;
        if (searchLast) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return position;
  };

  const firstPosition = binarySearch(nums, target, false);
  const lastPosition = binarySearch(nums, target, true);

  return [firstPosition, lastPosition];
}

console.log(firstAndLastPosition([10, 10, 10], 10));

/*
    Time Complexity: O(log(N))
*/
