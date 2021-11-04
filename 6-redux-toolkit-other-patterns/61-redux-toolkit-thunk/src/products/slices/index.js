import { retrieveProducts } from "../repositories/ProductsRepository";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const listProducts = createAsyncThunk(
  "products/listProducts",
  async () => {
    return await retrieveProducts();
  }
);


export const productsSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {},
  extraReducers: {
    [listProducts.fulfilled]: (state, action) => {
      const products = action.payload;
      return products.reduce((result, product) => {
        result[product.id] = product;
        return result;
      }, {});
    },
  },
});

export default productsSlice.reducer;