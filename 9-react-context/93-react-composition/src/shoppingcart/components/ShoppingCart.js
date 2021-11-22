import React from "react";
import { useProductsContext } from "../../productsContext";


const Product = ({ title, price, quantity }) => (
  <div>
    {title} - {price} €{quantity ? ` x ${quantity}` : null}
  </div>
);

function computeTotal(products) {
  return products.reduce((accuml, product) => {
    const value = product.price * product.quantity;
    return accuml + value;
  }, 0);
}

const ShoppingCart = () => {
  const { productsOnCart, checkout } = useProductsContext();
  const isEmpty = productsOnCart.length === 0;

  return (
    <div>
      <h3>Shopping Cart</h3>

      <div>
        {isEmpty ? <em>Please add some products to cart.</em> : ""}

        {productsOnCart.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

      <p>Total: {computeTotal(productsOnCart)} €</p>

      <button
        onClick={() => checkout(productsOnCart)}
        disabled={isEmpty ?? "disabled"}
      >
        Checkout
      </button>
    </div>
  );
};


export default ShoppingCart;
