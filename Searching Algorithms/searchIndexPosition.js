/* 
Solution for Search Index Position: Given a sorted array of distinct integers 
and a target value, return the index if the target is found. If not, return the 
index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

eg. Input: nums = [1,3,5,6], target = 2
Output: 1

*/

function searchIndexPosition(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  if (target < nums[0]) return 0;
  if (target > nums[end]) return end + 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] > target) {
      if (nums[mid - 1] < target) {
        return mid;
      }
      end = mid - 1;
    } else if (nums[mid] < target) {
      if (nums[mid + 1] > target) {
        return mid + 1;
      }
      start = mid + 1;
    } else {
      return mid;
    }
  }
}

console.log(searchIndexPosition([1, 3, 5, 6], 2));

/*
    Time Complexity: O(log(N))
*/
