import { useReducer } from "react";
import { useMutation, useQueryClient } from "react-query";

import { actions, reducer } from "./reducer";
import { buyProducts } from "./repositories/CartRepository";

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

  const { addToCart, checkout, setCart } = actions(dispatch);

  const checkoutAction = useMutation(buyProducts, {
    onMutate: () => {
      checkout();
    },
    onError: (err, products) => {
      setCart(products);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries("products");
    }
  });



  return {
    productsOnCart: productsOnCart(),
    addToCart,
    checkout: () => checkoutAction.mutate(shoppingcart)
  }
};