/* Given an array of objects representing students, calculate the average 
score of students who have scored above 90 */

const students = [
  { name: "Harry", score: 85 },
  { name: "Ron", score: 92 },
  { name: "Severus", score: 88 },
  { name: "Malfoy", score: 95 },
  { name: "Tom", score: 90 },
];

const averageScore = students
  .filter((student) => student.score > 90)
  .reduce((avg, student, i, arr) => {
    return avg + student.score / arr.length;
  }, 0);

console.log(averageScore);
