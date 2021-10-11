import React from "react";
import { render } from "react-dom";

import Products from "./products";
import ShoppingCart from "./shoppingcart";

render(
  <>
    <Products />
    <ShoppingCart />
  </>,
  document.getElementById("root")
);
