import ProductList from "./components/ProductList";

import { useSnapshot } from "valtio";

import { state as productState } from "./state";
import { state as shoppingCartState } from "../shoppingcart/state";

const ProductListWrapper = () => {
  const snapProduct = useSnapshot(productState);
  const snapShoppingCart = useSnapshot(shoppingCartState);

  const products = Object.values(snapProduct.remoteProducts);

  return (
    <ProductList products={products} addToCart={snapShoppingCart.addToCart} />
  );
};

export default ProductListWrapper;
