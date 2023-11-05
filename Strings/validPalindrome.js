/*

Solution for Valid Palindrome: Given a string s, 
return true if it is a palindrome, or false otherwise.

A phrase is a palindrome if, after converting all uppercase letters into 
lowercase letters and removing all non-alphanumeric characters, it reads 
the same forward and backward. Alphanumeric characters include letters 
and numbers.

e.g: Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

function isPalindrome(str) {
  if (str === " ") return true;

  return (
    str.toLocaleLowerCase().replaceAll(/[\W_]+/g, "") ===
    str
      .toLocaleLowerCase()
      .replaceAll(/[\W_]+/g, "")
      .split("")
      .reverse()
      .join("")
  );
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

/*
    Time Complexity: O(N)
 */
