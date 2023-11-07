/*

Solution for Rotate String: Given two strings s and goal, return true 
if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost 
position.

For example, if s = "abcde", then it will be "bcdea" after one shift.

e.g: Input: s = "abcde", goal = "cdeab"
Output: true
*/

function rotateString(s, goal) {
  if (s.length !== goal.length) return false;

  let len = s.length;

  while (len > 0) {
    s = s.slice(1).concat(s[0]);
    if (s === goal) return true;
    len--;
  }

  return false;

  // Different Approach
  // return s.concat(s).includes(goal);
}

console.log(rotateString("abcde", "bcdea"));

/*
    Time Complexity: O(N) where N is the length of s
*/
