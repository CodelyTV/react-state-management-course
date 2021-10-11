import { createStore, combineReducers } from "redux";

import productReducers from "../products/reducers";
import shoppingCartReducers from "../shoppingcart/reducers";

const store = createStore(
  combineReducers({
    products: productReducers,
    shoppingcart: shoppingCartReducers,
  }),
);

export default store;
