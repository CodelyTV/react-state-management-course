import React from "react";

const Product = ({ product, addToCart }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <div>
        {product.title} - {product.price} €
        {product.inventory ? ` x ${product.inventory}` : null}
      </div>

      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
};

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
