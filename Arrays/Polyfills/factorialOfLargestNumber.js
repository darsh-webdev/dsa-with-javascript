/* Given an array of numbers, calculate the factorial of the largest number. */

const numbers = [5, 2, 8, 4, 3];

const factorialOfLargestNumber = numbers.reduce((largestFactorial, num) => {
  let currentFactorial = Array.from({ length: num })
    .map((_, i) => i + 1)
    .reduce((fact, val) => fact * val, 1);

  return currentFactorial > largestFactorial
    ? currentFactorial
    : largestFactorial;
}, 1);

console.log(factorialOfLargestNumber);
