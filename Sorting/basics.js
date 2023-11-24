// Sorting in JavaScript

// sort in array
const arr = [-2, -7, 1000, 5];
console.log(arr.sort()); // Output: [-2, -7, 1000, 5]
// the above output is not what is expected because JS sort function converts
// the number into strings and then sorts them. Thus 1000 is placed before 5.

const strArr = ["Mango", "Apple", "Banana"];
console.log(strArr.sort()); // Output: [ 'Apple', 'Banana', 'Mango' ]

/* --------------- Bubble Sort ----------------- */
const bubbleSort = (arr) => {
  let swapped,
    swapCount = 0;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
        swapCount++;
      }
    }
  } while (swapped);
  console.log(swapCount);
  return arr;
};

console.log(bubbleSort([1000, 5, -2, -7]));
/*
    Swap count for Bubble sort in worst case will be N*(N-1)/2.
    Time Complexity: O(N^2)
    Space Complexity: O(1)
*/

/* --------------- Selection Sort ----------------- */
const selectionSort = (arr) => {
  let swapCount = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    swapCount++;
  }
  console.log(swapCount);
  return arr;
};

console.log(selectionSort([1000, 5, -2, -5, -7]));
/*
    Swap Count for Selection sort will always be (N-1).
    Time Complexity: O(N^2)
    Space Complexity: O(1)
*/

/* --------------- Insertion Sort ----------------- */

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};

console.log(insertionSort([-5, -7, 5, -2, 1000]));
/*
    In Best Case Time Complexity will be O(N).
    Time Complexity: O(N^2)
    Space Complexity: O(1)
*/

/* --------------- Merge Sort ----------------- */

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  let result = merge(left, right);
  return result;
};

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
};

const mergeArr = [29, 10, 16, 8, 37, 4, 45];
console.log(mergeSort(mergeArr));

/*
  Time Complexity: O(Nlog(N))
  Space Complexity: O(N)
*/

/* --------------- Merge Sort (Space Optimised) ----------------- */

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

let arr1 = [5, 1, 1, 2, 0, 0];
mergeSortOptimised(arr1, 0, arr1.length - 1);
console.log(arr1);

/*
  Time Complexity: O(Nlog(N))
  Space Complexity: O(N)
*/

/* --------------- Quick Sort ----------------- */

const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  let pivotIndex = Math.floor(Math.random() * arr.length);

  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] < arr[pivotIndex]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), arr[pivotIndex], ...quickSort(right)];
};

console.log(quickSort([10, 34, 20, 39, 49, 41, 25, 11]));

/*
  Time Complexity: O(Nlog(N))
  Space Complexity: O(N)
*/
