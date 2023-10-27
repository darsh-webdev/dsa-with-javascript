/*
Solution for Remove Duplicates from Sorted Array: Given an integer array nums sorted in non-decreasing order, 
remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. 
Then return the number of unique elements in nums.

Explanation:
Consider the number of unique elements of nums to be k, 
to get accepted, you need to do the following things:

1. Change the array nums such that the first k elements 
of nums contain the unique elements in the order they 
were present in nums initially. The remaining elements 
of nums are not important as well as the size of nums.
2. Return k.

eg: Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, 
with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond 
the returned k (hence they are underscores).
*/

function removeDuplicates(nums) {
  let i = 0; // take the first element of the sorted array
  // compare the first element to te next elements. if next element is a duplicate, skip
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) { // if next element is not duplicate
      nums[++i] = nums[j]; // copy its value to the element at index i+1.
    }
  }
  return i + 1;
}

console.log(removeDuplicates([1, 1, 2]));

/*
    Time Complexity: O(N)
*/
