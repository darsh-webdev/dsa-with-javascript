/*
Solution for Majority Element: Given an array nums of size n, return the majority element. 
The majority element is the element that appears more than ⌊n / 2⌋ times.

Note: Assume that the majority element always exists in the array.

eg: Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

function majorityElement(nums) {
  /* 
    nums.sort((a,b) => a - b);
    let length = nums.length;
    // Since the number has to be more than n/2 times, it has to be in the center.
    if (length % 2 === 0) {
      return nums[length / 2]; // If length is even we find the center by dividing by 2
    } else {
      return nums[(length - 1) / 2]; // If length is odd we find the center by subtracting 1 from length and then dividing by 2
    }
*/

  /*  Using Boyer-Moore Majority Vote Algo:
It is based on a very simple concept that the count of the majority will be greater than the combined count of all the other values in the array.

    1. First, we assume that element at index 0 is our majority element
    2. We declare two variables 'maj' and 'count' to keep the index of majority element and its count
    3. We will initialize these variables with value 0,1 respectively 
        i.e the index at which majority element exists is 0 and its count is 1
    4. Now we will iterate over the array from index 1
    5. When we encounter an element, if it is same as the number at majority index, 
        we increase the count else decrease it
    6. If at any point the count becomes 0, 
        we change majority index to that current index and change count back to 1
    7. At last, we have our index where the majority element exists
*/

  let maj = 0,
    count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[maj] == nums[i]) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      maj = i;
      count = 1;
    }
  }

  return nums[maj];
}

console.log(majorityElement([3, 2, 3]));

/*
   Time Complexity: O(N log N)
   Time Complexity(Using Boyer-Moore): O(N)
*/
