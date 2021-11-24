import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import productReducers from "../products/slices";
import shoppingCartReducers from "../shoppingcart/slices";


const store = configureStore({
  reducer: { 
     products: productReducers,
     shoppingcart: shoppingCartReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger())
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export default store;