async function buyProducts(products) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 200);
  });
}

export { buyProducts };
