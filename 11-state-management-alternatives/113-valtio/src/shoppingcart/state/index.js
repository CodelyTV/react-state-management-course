import { proxy } from "valtio";

export const state = proxy({
  shoppingcart: {},
  shoppingcartValues: [],

  addToCart: (product) => {
    if (state.shoppingcart[product.id]) {
      state.shoppingcart[product.id]++;
    } else {
      state.shoppingcart[product.id] = 1;
    }

    state.shoppingcartValues.push(product);
  },

  checkout: () => {
    state.shoppingcart = {};
    state.shoppingcartValues = [];
  },
});
