/*

Solution for Valid Anagram: Given two strings s and t, 
return true if t is an anagram of s, and false otherwise.

Note: An Anagram is a word or phrase formed by rearranging 
the letters of a different word or phrase, typically using all 
the original letters exactly once.

e.g: Input: s = "anagram", t = "nagaram"
Output: true

*/

function isAnagram(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

console.log(isAnagram("anagram", "nagaram"));

/*
    Time Complexity: O(N Log(N))
*/
