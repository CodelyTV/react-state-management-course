import { atom } from "jotai";

import { retrieveProducts } from "../repositories/ProductsRepository";

export const productsState = atom(async () => {
  const products = await retrieveProducts();

  return products.reduce((result, product) => {
    result[product.id] = product;
    return result;
  }, {});
});

export const productsValuesState = atom((get) => {
  const products = get(productsState);

  return Object.values(products);
});
