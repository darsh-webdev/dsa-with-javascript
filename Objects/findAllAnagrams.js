function findAllAnagrams(s, p) {
  let hash = {};
  let result = [];

  // create an object to contain every char in p as a key and its value as the count of appearances
  for (let i = 0; i < p.length; i++) {
    hash[p[i]] = (hash[p[i]] || 0) + 1;
  }

  // intialize window pointers and a count to check the length of p which is required to form an anagram.
  let left = 0;
  let right = 0;
  let count = 0;

  // Start Sliding Window
  while (right < s.length) {
    // if the current char is found in p and is currently needed, i.e its occurence in the object is greater than 0
    //  increase the count till all other chars are required to form the anagram of length p
    if (hash[s[right]] > 0) count++;

    // decrease the needed amount for the current char
    hash[s[right]]--;
    // move the right pointer one step forward
    right++;

    // if count is same as length of p this indicates that there is an anagram starting at the left pointer,
    // push the index of left into the output array.
    if (count === p.length) {
      result.push(left);
    }

    // At first, the window will increase its length by taking steps forward with its right pointer.
    // after the window length reaches length of p for the first time,
    // the window will start moving forward with its left pointer.
    if (right - left === p.length) {
      // if the char left behind was required, decrease the count to reset the count again
      if (hash[s[left]] >= 0) count--;

      // every time a required char is left behind as the window moves forward, increment that char's value in the object
      hash[s[left]]++;
      // move the left pointer one step forward
      left++;
    }
  }

  return result;
}

console.log(findAllAnagrams("cbaebabacd", "abc"));

/*
    Time Complexity: O(M+N) where M is the length of s and N is the length of p.
*/
