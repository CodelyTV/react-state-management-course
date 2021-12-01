import { Product } from "../product";

let PRODUCTS_DATA = [
  { id: 1, title: "iPad 4 Mini", price: 500.01 },
  { id: 2, title: "H&M T-Shirt White", price: 10.99 },
  { id: 3, title: "Charli XCX - Sucker CD", price: 19.99 },
];

async function retrieveProducts(): Promise<Product[]> {
  return new Promise<Product[]>((resolve) => {
    setTimeout(() => resolve(PRODUCTS_DATA), 100);
  });
}

export { retrieveProducts };
