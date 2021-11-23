import React from "react";

import { useProductsContext } from "../../productsContext";
import { useToggle } from "../../useToggle";

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
  const { active, toggle } = useToggle();

  return (
    <>
      <button onClick={toggle}>Hidde Product List</button>

      <h3>Products</h3>
      {active && products.map((product) => (
        <Product key={product.id} product={product} onAddToCartClicked={addToCart} />
      ))}
    </>
  );
};

export default ProductList;
