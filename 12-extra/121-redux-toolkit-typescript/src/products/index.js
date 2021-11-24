import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductList from "./components/ProductList";
import { addToCart } from "../shoppingcart/slices";
import { selectAll } from "./slices";

const Component = () => {
  const products = useSelector(selectAll);
  const dispatch = useDispatch();

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
