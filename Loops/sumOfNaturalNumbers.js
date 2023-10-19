/*
 Solution to find sum of given natural numbers from 0 - num!
eg: 5: 0 + 1 + 2 + 3 + 4 + 5 = 15
*/

function sumOfNaturalNums(num) {
  //using for loop
  /* 
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
        }
    return sum 
  */

  // using mathematical formula
  return (num * (num + 1)) / 2;
}

console.log(sumOfNaturalNums(8));

/* 
Time Complexity:
using for loop: O(n)
using math formula: O(1)
*/
