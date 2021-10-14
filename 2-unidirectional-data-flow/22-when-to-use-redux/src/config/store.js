import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import productReducers from "../products/reducers";
import shoppingCartReducers from "../shoppingcart/reducers";

const middlewares = [thunk];

const store = createStore(
  combineReducers({
    products: productReducers,
    shoppingcart: shoppingCartReducers,
  }),
  applyMiddleware(...middlewares)
);

export default store;
