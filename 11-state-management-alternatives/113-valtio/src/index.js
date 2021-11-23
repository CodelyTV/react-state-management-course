import React, { Suspense } from "react";
import { render } from "react-dom";

import Products from "./products";
import ShoppingCart from "./shoppingcart";

import { state } from "./shoppingcart/state";

const App = () => {
  return (
    <>
      <Products addToCart={state.addToCart} />
      <ShoppingCart checkout={state.checkout} />
    </>
  );
};

render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
