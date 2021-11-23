import React, { useEffect } from "react";
import { render } from "react-dom";

import Products from "./products";
import ShoppingCart from "./shoppingcart";

import useStore from "./config/store";

const App = () => {
  const products = useStore((state) => state.products);
  const shoppingcart = useStore((state) => state.shoppingcart);

  const productsOnCard = Object.entries(shoppingcart).map(([key, value]) => {
    const product = products[key];
    product.quantity = value;

    return product;
  });

  const listProducts = useStore((state) => state.listProducts);
  const addToCart = useStore((state) => state.addToCart);
  const checkout = useStore((state) => state.checkout);

  useEffect(() => {
    listProducts();
  }, [listProducts]);

  return (
    <>
      <Products products={Object.values(products)} addToCart={addToCart} />
      <ShoppingCart products={productsOnCard} checkout={checkout} />
    </>
  );
};

render(<App />, document.getElementById("root"));
