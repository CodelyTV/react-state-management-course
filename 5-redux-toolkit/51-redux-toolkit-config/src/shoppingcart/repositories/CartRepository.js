async function buyProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 100);
  });
}

export { buyProducts };
