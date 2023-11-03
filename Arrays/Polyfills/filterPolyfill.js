/* Example of Filter Method */

const products = [
  { name: "iPhone", price: 79990, inStock: true },
  { name: "Samsung Galaxy", price: 89999, inStock: false },
  { name: "Google Pixel", price: 69490, inStock: true },
];

const availableProducts = products.filter((product) => product.inStock);
console.log(availableProducts);

/* Polyfill of Filter */

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

const myAvailableProducts = products.myFilter((product) => product.inStock);
console.log(availableProducts);
