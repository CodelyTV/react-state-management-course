import { useQuery } from "react-query";
import { retrieveProducts } from "./repositories/ProductsRepository";

export const useProducts = () => {
  const { data } = useQuery("products", retrieveProducts, {
    placeholderData: [],
    staleTime: 5000
  });

  return {
    products: data
  }
}