import React, { Suspense } from "react";
import { render } from "react-dom";
import { useAtom } from "jotai";

import Products from "./products";
import ShoppingCart from "./shoppingcart";

import { shoppingCartState } from "./shoppingcart/state/atoms";

const App = () => {
  const [, setShoppingCart] = useAtom(shoppingCartState);

  function addToCart(product) {
    setShoppingCart((oldCart) => ({
      ...oldCart,
      [product.id]: oldCart[product.id] ? oldCart[product.id] + 1 : 1,
    }));
  }

  function checkout() {
    setShoppingCart({});
  }

  return (
    <>
      <Products addToCart={addToCart} />
      <ShoppingCart checkout={checkout} />
    </>
  );
};

render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
