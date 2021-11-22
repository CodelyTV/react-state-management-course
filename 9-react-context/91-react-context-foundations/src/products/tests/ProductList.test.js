import { render, screen } from "@testing-library/react";
import { ProductsContext } from "../../productsContext";

import ProductList from "../components/ProductList";

describe("Product list should", () => {
  test("show available products", () => {
    const products = [
      { id: 1, title: "iPad", price: 100, quantity: 1, inventory: 100 },
    ];
    const addToCart = jest.fn();

    render(
      <ProductsContext.Provider value={{ products, addToCart }}>
        <ProductList />
      </ProductsContext.Provider>
    );

    expect(screen.getByText(/ipad/i)).toBeDefined();
  });
});
