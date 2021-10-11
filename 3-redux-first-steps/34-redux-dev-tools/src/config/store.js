import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

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
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
