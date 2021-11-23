import React from "react";

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

const ShoppingCart = ({ products, checkout }) => {
  const isEmpty = products.length === 0;

  return (
    <div>
      <h3>Shopping Cart</h3>

      <div>
        {isEmpty ? <em>Please add some products to cart.</em> : ""}

        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

      <p>Total: {computeTotal(products)} €</p>

      <button
        onClick={() => checkout(products)}
        disabled={isEmpty ?? "disabled"}
      >
        Checkout
      </button>
    </div>
  );
};

export default ShoppingCart;
