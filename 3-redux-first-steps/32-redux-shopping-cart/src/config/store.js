import { createStore, combineReducers } from "redux";

import productReducers from "../products/reducers";

const store = createStore(
  combineReducers({
    products: productReducers
  }),
);

export default store;
