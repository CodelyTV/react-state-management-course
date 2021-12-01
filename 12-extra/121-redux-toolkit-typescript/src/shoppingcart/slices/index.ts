import { buyProducts } from "../repositories/CartRepository";

import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { CartProduct } from "../cartProduct";
import { AppThunk, RootState } from "../../config/store";

const shoppingcartAdapter = createEntityAdapter<CartProduct>();

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
    checkoutStart: (state) => { },
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

export const { selectAll } = shoppingcartAdapter.getSelectors<RootState>(
  (state) => state.shoppingcart
);

export const checkout = (products: CartProduct[]): AppThunk => async (dispatch, getState, patata) => {
  const { shoppingcart } = getState();

  dispatch(checkoutStart());
  await buyProducts(products)
  dispatch(checkoutSucceded(shoppingcart));
};

export default shoppingCartSlice.reducer;
