import { atom } from "jotai";

import { productsState } from "../../products/state/atoms";

export const shoppingCartState = atom({});

export const shoppingCartProductsState = atom((get) => {
  const shoppingcart = get(shoppingCartState);
  const products = get(productsState);

  return Object.entries(shoppingcart).map(([key, value]) => {
    const product = { ...products[key] };
    product.quantity = value;

    return product;
  });
});

export const shoppingCartTotalState = atom((get) => {
  const products = get(shoppingCartProductsState);

  return products.reduce((accuml, product) => {
    const value = product.price * product.quantity;
    return accuml + value;
  }, 0);
});
