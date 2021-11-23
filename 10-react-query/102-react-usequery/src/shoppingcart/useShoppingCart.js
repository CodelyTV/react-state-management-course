import { useReducer } from "react";
import { useQueryClient } from "react-query";

import { actions, reducer } from "./reducer";

const initialState = {};

export const useShoppingCart = (products) => {
  const [shoppingcart, dispatch] = useReducer(reducer, initialState);
  const queryClient = useQueryClient();

  function productsOnCart() {
    return Object.entries(shoppingcart).map(([key, value]) => {
      const product = products.find((product) => product.id === parseInt(key));
      product.quantity = value;

      return product;
    });
  }

  const { addToCart, checkout } = actions(dispatch);

  const checkoutAction = async () => {
    checkout();
    await queryClient.invalidateQueries("products");
  }

  return {
    productsOnCart: productsOnCart(),
    addToCart,
    checkout: checkoutAction
  }
};