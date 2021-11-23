import React from "react";
import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Products from "./products";
import ShoppingCart from "./shoppingcart";

import { useProducts } from "./products/useProdutcs";
import { useShoppingCart } from "./shoppingcart/useShoppingCart";
import { ProductsContext } from "./productsContext";

const queryClient = new QueryClient();

const App = () => {
  const { products } = useProducts();
  const { addToCart, checkout, productsOnCart } = useShoppingCart(products);

  return (
    <ProductsContext.Provider value={{ products, addToCart, checkout, productsOnCart }} >
      <Products />
      <ShoppingCart />
    </ProductsContext.Provider >
  );
};

render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  , document.getElementById("root")
);
