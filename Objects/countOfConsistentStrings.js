/*

Solution for Count the Number of Consistent Strings: You are given a string 
allowed consisting of distinct characters and an array of strings words. 
A string is consistent if all characters in the string appear in the string 
allowed.

Return the number of consistent strings in the array words.

e.g: Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain 
characters 'a' and 'b'.
*/

function countOfConsistentStrings(allowed, words) {}

let allowed = "abc";
let words = ["a", "b", "c", "ab", "ac", "bc", "abc"];

console.log(countOfConsistentStrings(allowed, words));
