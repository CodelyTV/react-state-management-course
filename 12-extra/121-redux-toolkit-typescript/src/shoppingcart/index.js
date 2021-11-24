import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ShoppingCart from "./components/ShoppingCart";

import { checkout, selectAll } from "../shoppingcart/slices";

const Component = () => {
  const products = useSelector(selectAll);
  const dispatch = useDispatch();

  return <ShoppingCart products={products} onCheckoutClicked={() => dispatch(checkout())} />;
};

export default Component;
