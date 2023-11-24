/*
Solution for Merge Sorted Array:You are given two integer arrays nums1 and nums2, sorted in 
non-decreasing order, and two integers m and n, representing the number of elements in nums1 
and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside 
the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements 
denote the elements that should be merged, and the last n elements are set to 0 and should be 
ignored. nums2 has a length of n.

e.g: Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

function mergeSortedArray(nums1, m, nums2, n) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < m && rightIndex < n) {
    if (nums1[leftIndex] < nums2[rightIndex]) {
      result.push(nums1[leftIndex]);
      leftIndex++;
    } else {
      result.push(nums2[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < m) {
    result.push(nums1[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < n) {
    result.push(nums2[rightIndex]);
    rightIndex++;
  }

  for (let i = 0; i < result.length; i++) {
    nums1[i] = result[i];
  }
}

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
mergeSortedArray(nums1, 3, nums2, 3);
console.log(nums1);

/*
    Time Complexity: O(m+n)
*/
