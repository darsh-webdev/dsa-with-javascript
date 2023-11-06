/*

Solution for Reverse Vowels in a String: Given a string s, reverse 
only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear 
in both lower and upper cases, more than once.

e.g: Input: s = "leetcode"
Output: "leotcede"
*/

function reverseVowels(s) {
  // Using two pointers
  /* 
  let left = 0;
  let right = s.length - 1;
  let vowels = "aeiouAEIOU";
  let sArray = s.split("");

  while (left < right) {
    while (left < right && !vowels.includes(sArray[left])) {
      left++;
    }

    while (left < right && !vowels.includes(sArray[right])) {
      right--;
    }
   
    [sArray[left], sArray[right]] = [sArray[right], s[left]];
   

    left++;
    right--;
  }

  return sArray.join("");
  */

  // using in-built functions
  const vowels = s.match(/[aeiou]/gi);
  return s.replace(/[aeiou]/gi, (el) => vowels.pop());
}

console.log(reverseVowels("leetcode"));

/*
    Time Complexity: O(N)
*/
