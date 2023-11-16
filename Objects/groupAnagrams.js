/*

Solution for Group Anagrams: Given an array of strings strs, group the anagrams 
together. You can return the answer in any order.

Note: An Anagram is a word or phrase formed by rearranging 
the letters of a different word or phrase, typically using all 
the original letters exactly once.

e.g: Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

function groupAnagrams(strs) {
  let groups = {};

  for (let x in strs) {
    let str = strs[x].split("").sort().join("");
    if (!groups.hasOwnProperty(str)) {
      groups[str] = [];
    }
    groups[str] = [...groups[str], strs[x]];
  }

  return Object.values(groups);
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));

/*
    Time Complexity: O(N)
*/
