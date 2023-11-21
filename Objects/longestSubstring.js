/*
Solution for Longest Substring Without Repeating Characters: Given a string s, 
find the length of the longest substring without repeating characters.

eg: Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

function lengthOfLongestSubstring(s) {
  if (s.length < 2) return s.length;

  let map = {};
  let front = 0;
  let back = 0;
  let maxLength = 0;
  for (; front < s.length; front++) {
    const exist = map[s[front]];
    if (exist != undefined && back <= exist) back = exist + 1;
    map[s[front]] = front;
    maxLength = Math.max(maxLength, front - back + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));

/*
    Time Complexity: O(N)
*/
