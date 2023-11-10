/*---------- Binary Search in JS -----------*/

const sortedArr = [1, 2, 4, 6, 7, 10, 12];

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

console.log(binarySearch(sortedArr, 4));
// Time Complexity: O(log(N))

// Binary Search using Recursion

const binarySearchRecursion = (arr, target) => {
  return binarySearchUtil(arr, target, 0, arr.length - 1);
};

const binarySearchUtil = (arr, target, start, end) => {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearchUtil(arr, target, mid + 1, end);
  } else {
    binarySearchUtil(arr, target, start, mid - 1);
  }
};

console.log(binarySearchRecursion(sortedArr, 12));
