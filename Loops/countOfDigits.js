/*
Solution for number of digits of a number

eg: 1287: 4, -121: 3
*/

function numOfDigits(num) {
  num = Math.abs(num); // To handle negative numbers as well
  let count = 0;

  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);

  return count;
}

console.log(numOfDigits(1287));

/*
  Time Complexity: O(log(N))
*/
