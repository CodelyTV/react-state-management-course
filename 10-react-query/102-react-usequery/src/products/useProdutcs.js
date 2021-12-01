import { useQuery } from "react-query";
import { retrieveProducts } from "./repositories/ProductsRepository";

export const useProducts = () => {
  const { data } = useQuery("products", retrieveProducts, {
    placeholderData: [],
  });

  return {
    products: data
  }
}