/*

Solution for Merge Strings Alternately: Given two strings word1 and word2. 
Merge the strings by adding letters in alternating order, starting with word1. 
If a string is longer than the other, append the additional letters onto the 
end of the merged string.
Return the merged string.


e.g: Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
*/

function mergeStringsAlternately(word1, word2) {
  let mergedStr = "";
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) {
      mergedStr += word1[i];
    }

    if (i < word2.length) {
      mergedStr += word2[i];
    }
  }

  return mergedStr;
}

console.log(mergeStringsAlternately("Drhn", "asa"));

/*
    Time Complexity: O(N) where N is the biggest word.
 */
