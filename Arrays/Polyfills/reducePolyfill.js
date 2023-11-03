/* Example of Filter Method */

const orders = [
  { name: "iPhone", price: 79990, quantity: 2 },
  { name: "Samsung Galaxy", price: 89999, quantity: 1 },
  { name: "Google Pixel", price: 69490, quantity: 3 },
];

const totalOrderAmount = orders.reduce((acc, ele) => {
  return acc + ele.price * ele.quantity;
}, 0);

console.log(totalOrderAmount); //458449

/* Polyfill of Reduce */

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue === undefined ? this[0] : initialValue;

  for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

const myTotalOrderAmount = orders.myReduce((acc, ele) => {
  return acc + ele.price * ele.quantity;
}, 0);
console.log(myTotalOrderAmount); //458449
