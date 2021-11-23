import { atom, selector } from "recoil";

import { productsState } from "../../products/state/atoms";

export const shoppingCartState = atom({
  key: "shoppingCart",
  default: {},
});

export const shoppingCartProductsState = selector({
  key: "shoppingCartProducts",
  get: ({ get }) => {
    const shoppingcart = get(shoppingCartState);
    const products = get(productsState);

    return Object.entries(shoppingcart).map(([key, value]) => {
      const product = { ...products[key] };
      product.quantity = value;

      return product;
    });
  },
});

export const shoppingCartTotalState = selector({
  key: "shoppingCartTotal",
  get: ({ get }) => {
    const products = get(shoppingCartProductsState);

    return products.reduce((accuml, product) => {
      const value = product.price * product.quantity;
      return accuml + value;
    }, 0);
  },
});
