import { proxy } from "valtio";

import { retrieveProducts } from "../repositories/ProductsRepository";

async function findRecords() {
  const products = await retrieveProducts();

  products.forEach((product) => {
    state.products[product.id] = product;
  });

  return state.products;
}

export const state = proxy({
  products: {},
  remoteProducts: findRecords(),
});
