import { retrieveProducts } from "../repositories/ProductsRepository";

import { createAsyncThunk, createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../product";
import { RootState } from "../../config/store";

const productsAdapter = createEntityAdapter<Product>();

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
    [listProducts.fulfilled.toString()]: (state, action: PayloadAction<Product[]>) => {
      productsAdapter.setAll(state, action.payload);
    },
  },
});

export const { selectAll } = productsAdapter.getSelectors<RootState>(
  (state) => state.products
);

export default productsSlice.reducer;