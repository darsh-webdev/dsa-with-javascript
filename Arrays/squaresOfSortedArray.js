/*
Solution for Squares of Sorted Array: Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.


eg: Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/

function squaresOfSortedArray(nums) {
  return nums.map((ele) => ele * ele).sort((a, b) => a - b);
}

console.log(squaresOfSortedArray([-7, -3, 2, 3, 11]));

/*
   Time Complexity: O(N log N)
*/
