import { useEffect, useState } from "react";
import { retrieveProducts } from "./repositories/ProductsRepository";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    retrieveProducts().then(setProducts);
  }, []);

  return {
    products
  }
}