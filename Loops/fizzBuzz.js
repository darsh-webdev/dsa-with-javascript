/*
Solution for Fizz Buzz.
Given an integer n, return a string array answer (1-indexed) where:
answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.


eg: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/

function fizzBuzz(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    let ans = "";

    if (i % 3 === 0) ans += "Fizz";
    if (i % 5 === 0) ans += "Buzz";
    if (ans === "") ans += i.toString();

    answer.push(ans);
  }

  return answer;
}

console.log(fizzBuzz(15));

/*
     Time Complexity: O(N)
*/
