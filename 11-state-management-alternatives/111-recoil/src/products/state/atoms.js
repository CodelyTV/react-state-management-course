import { selector } from "recoil";

import { retrieveProducts } from "../repositories/ProductsRepository";

export const productsState = selector({
  key: "products",
  get: async () => {
    const products = await retrieveProducts();

    return products.reduce((result, product) => {
      result[product.id] = product;
      return result;
    }, {});
  },
});

export const productsValuesState = selector({
  key: "productsValues",
  get: async ({ get }) => {
    const products = get(productsState);

    return Object.values(products);
  },
});
