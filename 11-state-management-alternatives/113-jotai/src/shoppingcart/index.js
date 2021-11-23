import { useAtom } from "jotai";

import ShoppingCart from "./components/ShoppingCart";

import {
  shoppingCartProductsState,
  shoppingCartTotalState,
} from "./state/atoms";

const ShoppingCartWrapper = ({ checkout }) => {
  const [products] = useAtom(shoppingCartProductsState);
  const [total] = useAtom(shoppingCartTotalState);

  return <ShoppingCart products={products} total={total} checkout={checkout} />;
};

export default ShoppingCartWrapper;
