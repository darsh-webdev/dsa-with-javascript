/*

Solution for Find the Index of the First Occurrence in a String: Given two strings 
needle and haystack, return the index of the first occurrence of needle in 
haystack, or -1 if needle is not part of haystack.

e.g: Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

*/

function indexOfFirstOccurance(haystack, needle) {
  // Using built in method
  //return haystack.indexOf(needle);

  let k = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[k]) {
      k++;
      if (k === needle.length) {
        return i - k + 1;
      }
    } else {
      i -= k;
      k = 0;
    }
  }

  return -1;
}

console.log(indexOfFirstOccurance("sadbutsad", "but"));

/*
    Time Complexity: O(N) (where N is haystack)
*/
