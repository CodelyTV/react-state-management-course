import React from "react";
import PropTypes from "prop-types";


const Product = ({ product, onAddToCartClicked  }) => {

  return (
    <div style={{ marginBottom: 20 }}>
      <div>
        {product.title} - {product.price} €
        {product.inventory ? ` x ${product.inventory}` : null}
      </div>

      <button onClick={() => onAddToCartClicked (product)}>Add to cart</button>
    </div>
  );
};

const ProductList = ({ products, onAddToCartClicked }) => {
  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCartClicked={onAddToCartClicked} />
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
  onAddToCartClicked: PropTypes.func,
};

export default ProductList;
