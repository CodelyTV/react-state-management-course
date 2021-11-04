import { retrieveProducts } from "../repositories/ProductsRepository";

import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {
    receiveProducts: (state, action) => {
      const products = action.payload;

      return products.reduce((result, product) => {
        result[product.id] = product;
        return result;
      }, {});
    },
  },
});

export const { receiveProducts } = productsSlice.actions;

export const listProducts = () => async (dispatch) => {
  const products = await retrieveProducts();

  dispatch(receiveProducts(products));
};

export default productsSlice.reducer;