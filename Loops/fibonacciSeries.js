/*
Solution for Fibonacci sequence for n.

eg: n = 4 : 0 1 1 2 3 = 3
*/

function fibonacci(n) {
  if (n < 2) return n;

  let prev = 0,
    current = 1,
    next;
  for (let i = 2; i <= n; i++) {
    next = prev + current;
    prev = current;
    current = next;
  }

  return next;
}

console.log(fibonacci(4));

/*
    Time Complexity: O(N)
*/
