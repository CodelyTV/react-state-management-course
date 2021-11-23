import React, { Suspense } from "react";
import { render } from "react-dom";
import { RecoilRoot, useSetRecoilState } from "recoil";

import Products from "./products";
import ShoppingCart from "./shoppingcart";

import { shoppingCartState } from "./shoppingcart/state/atoms";

const App = () => {
  const setShoppingCart = useSetRecoilState(shoppingCartState);

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
  <RecoilRoot>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </RecoilRoot>,
  document.getElementById("root")
);
