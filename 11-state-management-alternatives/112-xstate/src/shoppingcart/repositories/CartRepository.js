async function buyProducts(products) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Purchase error");
    }, 200);
  });
}

export { buyProducts };
