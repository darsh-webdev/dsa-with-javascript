/*
Solution for Sort an Array: Given an array of integers nums, sort the array in ascending 
order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time 
complexity and with the smallest space complexity possible.

e.g: Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed 
(for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
*/

var sortArray = function (nums) {
  mergeSortOptimised(nums, 0, nums.length - 1);
  return nums;
};

const mergeSortOptimised = (arr, low, high) => {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    mergeSortOptimised(arr, low, mid);
    mergeSortOptimised(arr, mid + 1, high);
    mergeOptimised(arr, low, mid, high);
  }
};

const mergeOptimised = (arr, low, mid, high) => {
  const result = [];
  let leftIndex = low,
    rightIndex = mid + 1;
  while (leftIndex <= mid && rightIndex <= high) {
    if (arr[leftIndex] < arr[rightIndex]) {
      result.push(arr[leftIndex]);
      leftIndex++;
    } else {
      result.push(arr[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex <= mid) {
    result.push(arr[leftIndex]);
    leftIndex++;
  }

  while (rightIndex <= high) {
    result.push(arr[rightIndex]);
    rightIndex++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = result[i - low];
  }
};

let nums = [5, 2, 3, 1];
console.log(sortArray(nums));

/*
  Time Complexity: O(Nlog(N))
  Space Complexity: O(N)
*/
