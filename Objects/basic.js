// Object in JavaScript
const person = {
  name: "Darshan",
  age: 24,
  isDeveloper: true,
  skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
  projects: {
    "Unique Clothing": "eCommerce Website Project",
  },
  code: function () {
    return "start coding";
  },
  walk: () => {
    return "start walking";
  },
};

console.log(person.age);
console.log(person["name"]);
console.log(person.hasOwnProperty("name"));

person.location = "Mumbai";

console.log(person.location);
