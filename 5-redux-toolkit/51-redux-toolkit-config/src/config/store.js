import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import productReducers from "../products/reducers";
import shoppingCartReducers from "../shoppingcart/reducers";


export default configureStore({
  reducer: { 
     products: productReducers,
    shoppingcart: shoppingCartReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
});
