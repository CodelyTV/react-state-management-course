import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import productReducers from "../products/slices";
import shoppingCartReducers from "../shoppingcart/slices";


export default configureStore({
  reducer: { 
     products: productReducers,
    shoppingcart: shoppingCartReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
});
