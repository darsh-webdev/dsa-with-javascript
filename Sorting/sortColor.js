/*
Solution for Sort Colors: Given an array nums with n objects colored red, white, or blue, 
sort them in-place so that objects of the same color are adjacent, with the colors in the 
order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

e.g: Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
*/

function sortColors(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
}

let arr = [2, 0, 2, 1, 1, 0];
sortColors(arr);
console.log(arr);

/*
    Time Complexity: O(N^2)
    Space Compexity: O(1)
*/
