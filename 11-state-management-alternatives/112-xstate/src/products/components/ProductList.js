import React from "react";
import { createMachine, assign } from "xstate";
import { useMachine } from "@xstate/react";

import { useProductsContext } from "../../productsContext";

const toggleMachine = createMachine({
  id: "toggle",
  initial: "active",
  states: {
    inactive: {
      on: { TOGGLE: "active" }
    },
    active: {
      on: { TOGGLE: "inactive" }
    }
  }
});

const Product = ({ product, onAddToCartClicked }) => {

  return (
    <div style={{ marginBottom: 20 }}>
      <div>
        {product.title} - {product.price} €
        {product.inventory ? ` x ${product.inventory}` : null}
      </div>

      <button onClick={() => onAddToCartClicked(product)}>Add to cart</button>
    </div>
  );
};

const ProductList = () => {
  const { products, addToCart } = useProductsContext();

  const [current, send] = useMachine(toggleMachine);
  const active = current.matches("active");

  return (
    <>
      <button onClick={() => send("TOGGLE")}>Hidde Product List</button>

      <h3>Products</h3>
      {active && products.map((product) => (
        <Product key={product.id} product={product} onAddToCartClicked={addToCart} />
      ))}
    </>
  );
};

export default ProductList;
