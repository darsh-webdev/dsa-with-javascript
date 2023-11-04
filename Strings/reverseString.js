/*

Solution for Reverse String: Write a function that reverses a string. 
The input string is given as an array of characters s.

Note: You must do this by modifying the input array in-place with O(1) extra memory.

e.g: Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

*/

function reverseString(s) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}

let s = ["H", "e", "l", "l", "o"];
reverseString(s);
console.log(s);

/*
    Time Complexity: O(log N)
*/
