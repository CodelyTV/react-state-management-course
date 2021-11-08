import { useEffect, useState } from "react";
import { retrieveProducts } from "./repositories/ProductsRepository";

export const useProducts = () => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    retrieveProducts().then((products) => {
      setProducts(
        products.reduce((result, product) => {
          result[product.id] = product;
          return result;
        }, {})
      );
    });
  }, []);

  return {
    products
  }
}