import { render, screen } from "@testing-library/react";

import ShoppingCart from "../components/ShoppingCart";

describe("Cart should", () => {
  test("warn on empty cart", () => {
    const products = [];

    render(
      <ShoppingCart
        products={products}
        onCheckoutClicked={jest.fn()}
      />
    );

    expect(screen.getByText(/please add/i)).toBeDefined();
  });

  test("disable checkout button when empty", () => {
    const products = [];

    render(
      <ShoppingCart
        products={products}
        onCheckoutClicked={jest.fn()}
      />
    );

    expect(screen.getByText(/checkout/i)).toBeDisabled();
  });

  test("show products added to the cart", () => {
    const products = [{ id: 1, title: "iPad", price: 100, quantity: 1 }];

    render(
      <ShoppingCart
        products={products}
        onCheckoutClicked={jest.fn()}
      />
    );

    expect(screen.getByText(/ipad/i)).toBeDefined();
  });
});
