/*

Solution for Reverse Words in a String: Given an input string s, reverse the order 
of the words.
A word is defined as a sequence of non-space characters. The words in s will be 
separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.

Note: s may contain leading or trailing spaces or multiple spaces between two words. 
The returned string should only have a single space separating the words. Do not 
include any extra spaces.

e.g: Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
*/

function reverseWords(s) {
  /*
    1. trim blank spaces from start and end
    2. split into array of substrings wherever one or more consecutive whitespace characters are found
    3. reverse the array of substrings
    4. join the array to make it a string again
     */
  return s.trim().split(/\s+/g).reverse().join(" ");
}

console.log(reverseWords("  hello   World  "));

/*
    Time Complexity: O(N)
*/
