import React from "react";
import { ProductsContext } from "../../productsContext";


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
  return (
    <ProductsContext.Consumer>
      {({ products, addToCart }) => (
        <>
          <h3>Products</h3>
          {Object.values(products).map((product) => (
            <Product key={product.id} product={product} onAddToCartClicked={addToCart} />
          ))}
        </>
      )}
    </ProductsContext.Consumer>
  );
};

export default ProductList;
