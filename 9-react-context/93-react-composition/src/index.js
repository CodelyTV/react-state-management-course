import React from "react";
import { render } from "react-dom";

import Products from "./products";
import ShoppingCart from "./shoppingcart";

import { useProducts } from "./products/useProdutcs";
import { useShoppingCart } from "./shoppingcart/useShoppingCart";
import { ProductsContext } from "./productsContext";
import { UserInfo } from "./UserInfo";

const App = () => {
  const { products } = useProducts();
  const { addToCart, checkout, productsOnCart } = useShoppingCart(products);

  return (
    <ProductsContext.Provider value={{ products, addToCart, checkout, productsOnCart }} >
      <Products>
        <UserInfo user={"Isma Navarro"} />
      </Products>
      <ShoppingCart />
    </ProductsContext.Provider >
  );
};

render(<App />, document.getElementById("root"));
