import { CartProduct } from "../cartProduct";

async function buyProducts(products: CartProduct[]): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 100);
  });
}

export { buyProducts };
