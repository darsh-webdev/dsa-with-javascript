/*

Linear Search Problem

Solution for Find the Index of the First Occurrence in a String: Given two strings 
subString and mainString, return the index of the first occurrence of subString in 
mainString, or -1 if subString is not part of mainString.

e.g: Input: mainString = "sadbutsad", subString = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

*/

function indexOfFirstOccurance(mainString, subString) {
  let m = mainString.length;
  let n = subString.length;
  for (let i = 0; i <= m - n; i++) {
    let flag = true;
    for (let j = 0; j < n; j++) {
      if (mainString[i + j] !== subString[j]) {
        flag = false;
        break;
      }
    }
    if (flag) return i;
  }

  return -1;
}

console.log(indexOfFirstOccurance("sadbutsad", "but"));

/*
    Time Complexity: O(M*N) (where M is length of mainString and N is length of substring)
*/
