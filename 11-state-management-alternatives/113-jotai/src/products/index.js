import ProductList from "./components/ProductList";

import { useAtom } from "jotai";

import { productsValuesState } from "./state/atoms";

const ProductListWrapper = ({ addToCart }) => {
  const [products] = useAtom(productsValuesState);

  return <ProductList products={products} addToCart={addToCart} />;
};

export default ProductListWrapper;
