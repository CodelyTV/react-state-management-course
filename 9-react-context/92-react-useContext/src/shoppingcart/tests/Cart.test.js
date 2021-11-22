import { render, screen } from "@testing-library/react";
import { ProductsContext } from "../../productsContext";

import ShoppingCart from "../components/ShoppingCart";

describe("Cart should", () => {
  test("warn on empty cart", () => {
    const productsOnCart = [];
    const checkout = jest.fn();

    render(
      <ProductsContext.Provider value={{ productsOnCart, checkout }}>
        <ShoppingCart />
      </ProductsContext.Provider>
    );

    expect(screen.getByText(/please add/i)).toBeDefined();
  });

  test("disable checkout button when empty", () => {
    const productsOnCart = [];
    const checkout = jest.fn();

    render(
      <ProductsContext.Provider value={{ productsOnCart, checkout }}>
        <ShoppingCart />
      </ProductsContext.Provider>
    );

    expect(screen.getByText(/checkout/i)).toBeDisabled();
  });

  test("show products added to the cart", () => {
    const productsOnCart = [{ id: 1, title: "iPad", price: 100, quantity: 1 }];
    const checkout = jest.fn();

    render(
      <ProductsContext.Provider value={{ productsOnCart, checkout }}>
        <ShoppingCart />
      </ProductsContext.Provider>
    );

    expect(screen.getByText(/ipad/i)).toBeDefined();
  });
});
