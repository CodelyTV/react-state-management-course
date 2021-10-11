import { createStore, combineReducers, applyMiddleware } from "redux";

import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import productReducers from "../products/reducers";
import shoppingCartReducers from "../shoppingcart/reducers";

const middlewares = [thunk];
if (process.env.NODE_ENV !== "production") {
  middlewares.push(createLogger());
}

const store = createStore(
  combineReducers({
    products: productReducers,
    shoppingcart: shoppingCartReducers,
  }),
  applyMiddleware(...middlewares)
);

export default store;
