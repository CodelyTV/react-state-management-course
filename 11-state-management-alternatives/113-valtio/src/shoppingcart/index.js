import ShoppingCart from "./components/ShoppingCart";

import { useSnapshot } from "valtio";

import { state as shoppingCartState } from "./state";
import { state as productState } from "../products/state";

function productsOnShoppingCart(snapshotShoppingCart, snapshotProduct) {
  const products = snapshotProduct.products;

  return Object.entries(snapshotShoppingCart.shoppingcart).map(
    ([key, value]) => {
      const product = { ...products[key] };
      product.quantity = value;

      return product;
    }
  );
}

function computeTotal(snapshotShoppingCart, snapshotProduct) {
  return productsOnShoppingCart(snapshotShoppingCart, snapshotProduct).reduce(
    (accuml, product) => {
      const value = product.price * product.quantity;
      return accuml + value;
    },
    0
  );
}

const ShoppingCartWrapper = () => {
  const snapshotShoppingCart = useSnapshot(shoppingCartState);
  const snapshotProduct = useSnapshot(productState);

  return (
    <ShoppingCart
      products={productsOnShoppingCart(snapshotShoppingCart, snapshotProduct)}
      total={computeTotal(snapshotShoppingCart, snapshotProduct)}
      checkout={snapshotShoppingCart.checkout}
    />
  );
};

export default ShoppingCartWrapper;
