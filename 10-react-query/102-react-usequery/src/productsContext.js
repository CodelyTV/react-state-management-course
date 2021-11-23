import { createContext, useContext } from "react";

const useProductsContext = () => {
  const products = useContext(ProductsContext);
  return products;
}

const ProductsContext = createContext();

export { ProductsContext, useProductsContext };