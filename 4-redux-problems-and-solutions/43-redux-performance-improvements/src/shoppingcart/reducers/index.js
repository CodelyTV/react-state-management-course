import produce from "immer";

import { ADD_TO_CART, CHECKOUT_SUCCESS } from "../constants";

const initialState = {
  products: {},
};

const reducer = produce((draft = initialState, action) => {
  const { type, product } = action;

  if (type === ADD_TO_CART) {
    draft.products[product.id] = ++draft.products[product.id] || 1;
  } else if(type === CHECKOUT_SUCCESS) {
    draft.products = {};
  }

  return draft;
});

export default reducer;
