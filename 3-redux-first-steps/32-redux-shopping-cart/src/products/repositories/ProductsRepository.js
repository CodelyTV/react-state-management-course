let PRODUCTS_DATA = [
  { id: 1, title: "iPad 4 Mini", price: 500.01 },
  { id: 2, title: "H&M T-Shirt White", price: 10.99 },
  { id: 3, title: "Charli XCX - Sucker CD", price: 19.99 },
];

// async function retrieveProducts() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(PRODUCTS_DATA), 100);
//   });
// }

function retrieveProducts() {
  return PRODUCTS_DATA;
}

export { retrieveProducts };
