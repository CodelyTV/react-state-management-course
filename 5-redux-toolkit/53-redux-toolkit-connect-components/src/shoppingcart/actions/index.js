import { CHECKOUT_REQUEST, CHECKOUT_SUCCESS } from "../constants";

import { buyProducts } from "../repositories/CartRepository";

export const checkout = (products) => async (dispatch, getState) => {
  const { shoppingcart } = getState();

  dispatch({
    type: CHECKOUT_REQUEST,
  });

  await buyProducts(products);
  
  dispatch({
    type: CHECKOUT_SUCCESS,
    shoppingcart,
  });
};
