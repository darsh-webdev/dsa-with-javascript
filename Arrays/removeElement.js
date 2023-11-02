/*
Solution for Remove Element: Given an integer array nums and an integer val, 
remove all occurrences of val in nums in-place. The order of the elements
may be changed. Then return the number of elements in nums which are not 
equal to val.

Explanation:
Consider the number of elements in nums which are not equal to 
val be k, to get accepted, you need to do the following things:

1. Change the array nums such that the first k elements of 
nums contain the elements which are not equal to val. The 
remaining elements of nums are not important as well as the 
size of nums.
2. Return k.

eg: Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, 
with the first five elements of nums containing
0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k 
(hence they are underscores).
*/

function removeElement(nums, val) {
  /*
  let filteredArr = nums.filter((ele) => ele !== val);

  for (let i = 0; i < filteredArr.length; i++) {
    nums[i] = filteredArr[i];
  }

  return filteredArr.length;
  */

  // Using two pointer method
  let j = 0;
  for (let n of nums) {
    if (n != val) {
      nums[j++] = n;
    }
  }
  return j;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

/*
      Time Complexity: O(N)
  */
