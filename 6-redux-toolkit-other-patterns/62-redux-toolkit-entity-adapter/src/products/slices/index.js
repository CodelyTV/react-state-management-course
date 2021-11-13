import { retrieveProducts } from "../repositories/ProductsRepository";

import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const productsAdapter = createEntityAdapter();

export const listProducts = createAsyncThunk(
  "products/listProducts",
  async () => {
    return await retrieveProducts();
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: productsAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [listProducts.fulfilled]: (state, action) => {
      productsAdapter.setAll(state, action.payload);
    },
  },
});

export const { selectAll } = productsAdapter.getSelectors(
  (state) => state.products
);

export default productsSlice.reducer;