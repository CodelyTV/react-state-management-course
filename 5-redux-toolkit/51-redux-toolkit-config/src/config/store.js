import productReducers from "../products/reducers";
import shoppingCartReducers from "../shoppingcart/reducers";

import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: { 
     products: productReducers,
    shoppingcart: shoppingCartReducers,
  },
});
