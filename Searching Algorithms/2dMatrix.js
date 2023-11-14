/* 
Solution for Search 2D Matrix: You are given an m x n integer matrix matrix with 
the following two properties:

1. Each row is sorted in non-decreasing order.
2. The first integer of each row is greater than the last integer of the 
previous row.

Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

eg. Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
*/

function search2DMatrix(matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  let start = 0;
  let end = m * n - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let midVal = matrix[Math.floor(mid / n)][mid % n]; // Math.floor(mid / n): calculates row, mid % n: calculates column

    if (midVal === target) return true;
    else if (midVal < target) start = mid + 1;
    else end = mid - 1;
  }
  return false;
}

console.log(
  search2DMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    10
  )
);

/*
    Time Complexity: O(log(m * n))
*/
