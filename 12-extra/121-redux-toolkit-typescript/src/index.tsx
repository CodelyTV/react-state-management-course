import { render } from "react-dom";
import { Provider } from "react-redux";
import store, { AppDispatch } from "./config/store";

import Products from "./products";
import { listProducts } from "./products/slices";
import ShoppingCart from "./shoppingcart";

(store.dispatch as AppDispatch)(listProducts());

render(
  <Provider store={store}>
    <Products />
    <ShoppingCart />
  </Provider>,
  document.getElementById("root")
);
