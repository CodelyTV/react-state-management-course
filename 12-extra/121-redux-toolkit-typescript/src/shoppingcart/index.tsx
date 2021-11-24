import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../config/store";

import ShoppingCart from "./components/ShoppingCart";

import { checkout, selectAll } from "./slices";

const Component = () => {
  const products = useSelector(selectAll);
  const dispatch = useDispatch<AppDispatch>();

  return <ShoppingCart products={products} onCheckoutClicked={(products) => dispatch(checkout(products))} />;
};

export default Component;
