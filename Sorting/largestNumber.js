/*
Solution for Largest Number: Given a list of non-negative integers nums, 
arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

e.g: Input: nums = [3,30,34,5,9]
Output: "9534330"
*/

function largestNumber(nums) {
  nums.sort((a, b) => {
    const ab = a.toString() + b.toString();
    const ba = b.toString() + a.toString();
    return ba - ab;
  });

  if (nums[0] === 0) return "0";

  return nums.join("");
}

console.log(largestNumber([3, 30, 34, 5, 9]));

/*
    Time Complexity: O(Nlog(N))
*/
