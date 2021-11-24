import { useSelector, useDispatch } from "react-redux";

import ProductList from "./components/ProductList";
import { addToCart } from "../shoppingcart/slices";
import { selectAll } from "./slices";
import { AppDispatch } from "../config/store";

const Component = () => {
  const products = useSelector(selectAll);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ProductList
      products={products}
      onAddToCartClicked={(data) => {
        dispatch(addToCart(data));
      }}
    />
  );
};

export default Component;
