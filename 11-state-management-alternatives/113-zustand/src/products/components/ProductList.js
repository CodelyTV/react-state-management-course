import React from "react";
import PropTypes from "prop-types";

const Product = ({ data, addToCart }) => (
  <div style={{ marginBottom: 20 }}>
    <div>
      {data.title} - {data.price} €
      {data.inventory ? ` x ${data.inventory}` : null}
    </div>

    <button onClick={() => addToCart(data)}>Add to cart</button>
  </div>
);

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h3>Products</h3>

      {products.map((product) => (
        <Product key={product.id} data={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
