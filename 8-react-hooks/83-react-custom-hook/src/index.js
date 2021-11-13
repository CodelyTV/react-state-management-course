import React from "react";
import { render } from "react-dom";

import Products from "./products";
import ShoppingCart from "./shoppingcart";

import { useProducts } from "./products/useProdutcs";
import { useShoppingCart } from "./shoppingcart/useShoppingCart";

const App = () => {
  const { products } = useProducts();
  const { addToCart, checkout, productsOnCart } = useShoppingCart(products);

  return (
    <>
      <Products products={Object.values(products)} onAddToCartClicked={addToCart} />
      <ShoppingCart products={productsOnCart()} onCheckoutClicked={checkout} />
    </>
  );
};

render(<App />, document.getElementById("root"));
