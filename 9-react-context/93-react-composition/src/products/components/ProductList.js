import React from "react";
import { useProductsContext } from "../../productsContext";
import { UserInfo } from "../../UserInfo";


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

const ProductList = ({ user }) => {
  const { products, addToCart } = useProductsContext();
  return (
    <>
      <h3>Products</h3>

      <UserInfo user={user} />

      {Object.values(products).map((product) => (
        <Product key={product.id} product={product} onAddToCartClicked={addToCart} />
      ))}
    </>
  );
};

export default ProductList;
