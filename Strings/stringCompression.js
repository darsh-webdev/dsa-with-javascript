/*

Solution for String Compression:Given an array of characters chars, compress it 
using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters 
in chars:
1. If the group's length is 1, append the character to s.

2. Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, 
be stored in the input character array chars. Note that group lengths that are 
10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

e.g: Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array 
should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
*/

function stringCompression(chars) {
  let read = 0; // to read the characters
  let write = 0; // to write compressed characters

  while (read < chars.length) {
    let char = chars[read]; // to store the current char
    let count = 0; // to keep count of repeated chars

    // count the repeating chars
    while (read < chars.length && chars[read] === char) {
      read++;
      count++;
    }

    // Write the char
    chars[write++] = char;

    //if count > 1, write the counts
    if (count > 1) {
      let countStr = count.toString();
      for (let digit of countStr) {
        chars[write++] = digit;
      }
    }
  }

  //trim the length if compression if finished before reaching the end of array
  chars.length = write;

  return write;
}

console.log(stringCompression(["a", "a", "b", "b", "c", "c", "c"]));

/*
    Time Complexity: O(N)
*/
