import { buyProducts } from "../repositories/CartRepository";

import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "shoppingcart",
  initialState: { products: {} },
  reducers: {
    addToCart: (state, action) => {
      state.products[action.payload.id] = ++state.products[action.payload.id] || 1;
    },
    checkoutStart: (state, action) => { },
    checkoutSucceded: (state, action) => {
      state.products = {}
    },
  },
});

export const {
  checkoutStart,
  checkoutSucceded,
  addToCart,
} = shoppingCartSlice.actions;

export const checkout = (products) => async (dispatch, getState) => {
  const { shoppingcart } = getState();

  dispatch(checkoutStart());
  await buyProducts(products)
  dispatch(checkoutSucceded(shoppingcart));
};

export default shoppingCartSlice.reducer;
