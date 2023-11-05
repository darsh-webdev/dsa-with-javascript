/*

Solution for Length Of Last Word: Given a string s consisting of words and spaces, 
return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

e.g: Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
*/

function lengthOfLastWord(str) {
  return str.trimEnd().split(" ").at(-1).length;
}

console.log(lengthOfLastWord("Hello World   "));

/*
    Time Complexity: O(N)
*/
