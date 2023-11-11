/* 
Solution for Find floor and ceil value of element in an array: Given an array and an integer x,
find the floor and ceil value of x in the given array and return their index.

floor: greatest integer smaller than x.
ceil: smallest integer greater than x.

eg. Input: arr=[1, 5, 8, 11, 12], x=9
Output: [2, 3] floor=8, ceil=11
*/

const floorAndCeil = (arr, x) => {
  let start = 0;
  let end = arr.length - 1;
  let floor = -1;
  let ceil = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) {
      floor = mid;
      ceil = mid;
      return [floor, ceil];
    } else if (arr[mid] > x) {
      ceil = mid;
      end = mid - 1;
    } else {
      floor = mid;
      start = mid + 1;
    }
  }
  return [floor, ceil];
};

console.log(floorAndCeil([1, 5, 8, 11, 12],10));
