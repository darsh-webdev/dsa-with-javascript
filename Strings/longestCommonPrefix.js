/*

Solution for Longest Common Prefix: Write a function to find the longest common 
prefix string amongst an array of strings.

Note: If there is no common prefix, return an empty string "".

e.g: Input: strs = ["flower","flow","flight"]
Output: "fl"

*/

function longestCommonPrefix(strs) {
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    if (!char) return "";

    if (strs.every((str) => str[i] === char)) {
      prefix += char;
    } else break;
  }

  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

/*
    Time Complexity: O()
*/
