import { render, screen } from "@testing-library/react";

import ProductList from "../components/ProductList";

describe("Product list should", () => {
  test("show available products", () => {
    const products = [
      { id: 1, title: "iPad", price: 100, quantity: 1, inventory: 100 },
    ];

    render(<ProductList products={products} onAddToCartClicked={jest.fn()} />);

    expect(screen.getByText(/ipad/i)).toBeDefined();
  });
});
