import { proxy } from "valtio";

import { retrieveProducts } from "./products/repositories/ProductsRepository";

async function findRecords() {
  const products = await retrieveProducts();

  products.forEach((product) => {
    state.products[product.id] = product;
  });

  return state.products;
}

export const state = proxy({
  shoppingcart: {},
  shoppingcartValues: [],
  products: {},
  remoteProducts: findRecords(),

  addToCart: (product) => {
    if (state.shoppingcart[product.id]) {
      state.shoppingcart[product.id]++;
    } else {
      state.shoppingcart[product.id] = 1;
    }

    state.shoppingcartValues.push(product);

    console.log(state.shoppingcart, state.shoppingcartValues);
  },

  checkout: () => {
    state.shoppingcart = {};
    state.shoppingcartValues = [];
  },
});
