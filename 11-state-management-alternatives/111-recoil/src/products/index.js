import ProductList from "./components/ProductList";

import { useRecoilValue } from "recoil";

import { productsValuesState } from "./state/atoms";

const ProductListWrapper = ({ addToCart }) => {
  const products = useRecoilValue(productsValuesState);
  return <ProductList products={products} addToCart={addToCart} />;
};

export default ProductListWrapper;
