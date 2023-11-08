/*
Solution for Check whether the given string is Palindrome or not using Recursion.

e.g: Input: racecar
Output: true
*/

function recursionPalindrome(str) {
  if (str.length <= 1) return true;

  if (str[0] !== str[str.length - 1]) return false;

  return recursionPalindrome(str.slice(1, str.length - 1));
}

console.log(recursionPalindrome("racecar"));

/*
    Time Complexity: O(N) where N is length of String
    Space Complexity: O(N)
*/
