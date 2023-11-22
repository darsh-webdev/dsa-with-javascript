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
