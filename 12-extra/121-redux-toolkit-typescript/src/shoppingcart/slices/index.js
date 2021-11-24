import { buyProducts } from "../repositories/CartRepository";

import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const shoppingcartAdapter = createEntityAdapter();

export const shoppingCartSlice = createSlice({
  name: "shoppingcart",
  initialState: shoppingcartAdapter.getInitialState(),
  reducers: {
    addToCart: (state, action) => {
      let product = state.entities[action.payload.id] || {
        ...action.payload,
        quantity: 0,
      };

      product.quantity++;

      shoppingcartAdapter.upsertOne(state, product);
    },
    checkoutStart: (state, action) => { },
    checkoutSucceded: (state, action) => {
      shoppingcartAdapter.removeAll(state);
    },
  },
});

export const {
  checkoutStart,
  checkoutSucceded,
  addToCart,
} = shoppingCartSlice.actions;

export const { selectAll } = shoppingcartAdapter.getSelectors(
  (state) => state.shoppingcart
);

export const checkout = (products) => async (dispatch, getState) => {
  const { shoppingcart } = getState();

  dispatch(checkoutStart());
  await buyProducts(products)
  dispatch(checkoutSucceded(shoppingcart));
};

export default shoppingCartSlice.reducer;
