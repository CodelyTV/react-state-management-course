import { useReducer } from "react";

import { actions, reducer } from "./reducer";

const initialState = {};

export const useShoppingCart = (products) => {
  const [shoppingcart, dispatch] = useReducer(reducer, initialState);

  function productsOnCart() {
    return Object.entries(shoppingcart).map(([key, value]) => {
      const product = products[key];
      product.quantity = value;

      return product;
    });
  }

  const { addToCart, checkout } = actions(dispatch);

  return {
    productsOnCart: productsOnCart(),
    addToCart,
    checkout
  }
};