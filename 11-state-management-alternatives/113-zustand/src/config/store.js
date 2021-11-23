import create from "zustand";
import { devtools } from "zustand/middleware";

import { retrieveProducts } from "../products/repositories/ProductsRepository";

const useStore = create(
  devtools((set) => ({
    products: {},
    shoppingcart: {},

    listProducts: async () => {
      const products = await retrieveProducts();

      set({
        products: products.reduce((result, product) => {
          result[product.id] = product;
          return result;
        }, {}),
      });
    },

    addToCart: (product) =>
      set((state) => {
        state.shoppingcart = {
          ...state.shoppingcart,
          [product.id]: state.shoppingcart[product.id]
            ? state.shoppingcart[product.id] + 1
            : 1,
        };
      }),

    checkout: () => set({ shoppingcart: {} }),
  }))
);

export default useStore;
