import React, { useState } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./config/store";

import Products from "./products";
import { listProducts } from "./products/actions";
import ShoppingCart from "./shoppingcart";

store.dispatch(listProducts());

const RandomComponent = () => {
  return (
    <div style={{ background: "antiquewhite" }}>
      <h4>Math.random</h4>
      <p>{Math.random()}</p>
    </div>
  );
}

const App = () => {
  const [number, setNumber] = useState(0);

  return (
    <Provider store={store}>
      <Products setNumber={setNumber} />
      <ShoppingCart number={number} />
      <RandomComponent />
    </Provider>
  );
}

render(
  <App />,
  document.getElementById("root")
);
