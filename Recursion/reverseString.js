/*
Solution for Reverse a String using Recursion.

e.g: Input: Hello
Output: olleH
*/

function reverseString(str) {
  if (str.length <= 1) return str;

  return (
    str.charAt(str.length - 1) + reverseString(str.slice(0, str.length - 1))
  );
}

console.log(reverseString("Hello"));

/*
      Time Complexity: O(N) where N is length of String
      Space Complexity: O(N)
  */
