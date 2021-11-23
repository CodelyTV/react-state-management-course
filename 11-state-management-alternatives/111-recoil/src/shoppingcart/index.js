import { useRecoilValue } from "recoil";

import ShoppingCart from "./components/ShoppingCart";

import {
  shoppingCartProductsState,
  shoppingCartTotalState,
} from "./state/atoms";

const ShoppingCartWrapper = ({ checkout }) => {
  const products = useRecoilValue(shoppingCartProductsState);
  const total = useRecoilValue(shoppingCartTotalState);

  return <ShoppingCart products={products} total={total} checkout={checkout} />;
};

export default ShoppingCartWrapper;
