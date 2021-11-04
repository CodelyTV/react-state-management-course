import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ShoppingCart from "./components/ShoppingCart";

import { checkout } from "../shoppingcart/slices";

const Component = () => {
  const products = useSelector((state) => {
    const products = state.products;
    const productsOnCard = Object.entries(state.shoppingcart.products);

    return productsOnCard.map(([key, value]) => {
      return { ...products[key], quantity: value };
    });
  });
  const dispatch = useDispatch();


  return <ShoppingCart products={products} onCheckoutClicked={() => dispatch(checkout())} />;
};

export default Component;
