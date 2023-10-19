/*
Solution for number is Palindrome or not.

eg: 121 = true, -121 = false
*/

function isPalindrome(num) {
  let copyNum = num;
  let reverseNum = 0;

  while (copyNum > 0) {
    let lastDigit = copyNum % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    copyNum = Math.floor(copyNum / 10);
  }

  return reverseNum === num;
}

console.log(isPalindrome(121));

/*
  Time Complexity: O(log(N))
*/
