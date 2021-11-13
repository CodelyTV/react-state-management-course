import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductList from "./components/ProductList";
import { addToCart } from "../shoppingcart/slices";

const Component = () => {
  const products = useSelector((state) => Object.values(state.products));
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
