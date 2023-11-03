/* Example of Map Method */

const users = [
  { name: "Darshan", age: 24 },
  { name: "Kratos", age: 54 },
  { name: "Atreus", age: 14 },
];

const userNames = users.map((user) => user.name);
console.log(userNames);

/* Polyfill of Map */

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

const userNames1 = users.myMap((user) => user.name);
console.log(userNames1);
