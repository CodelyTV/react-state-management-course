import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./config/store";

import Products from "./products";
import ShoppingCart from "./shoppingcart";

render(
  <Provider store={store}>
    <Products />
    <ShoppingCart />
  </Provider>,
  document.getElementById("root")
);
