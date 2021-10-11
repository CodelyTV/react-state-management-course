import React from "react";
import { createStore } from "redux";

import { render, fireEvent, cleanup } from "@testing-library/react";

const defaultState = 0;

const counterReducer = (state = defaultState, action) => {
  const { type } = action;

  if (type === "INCREMENT") return state + 1;
  if (type === "DECREMENT") return state - 1;

  return state;
};

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <span>{value}</span>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const app = () => (
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: "INCREMENT" })}
    onDecrement={() => store.dispatch({ type: "DECREMENT" })}
  />
);

let store;

describe("Counter component should", () => {
  beforeEach(() => {
    store = createStore(counterReducer);
  });

  afterEach(cleanup);

  test("initial counter is zero", () => {
    const { getByText } = render(app());

    expect(getByText("0")).toBeDefined();
  });

  test("increment when `+` button is pressed", async (end) => {
    const { getByText } = render(app());

    store.subscribe(async () => {
      const { getByText } = render(app());
      expect(getByText("1")).toBeDefined();
      end();
    });

    fireEvent.click(getByText("+"));
  });

  test("decrement when `-` button is pressed", async (end) => {
    const { getByText } = render(app());

    store.subscribe(async () => {
      const { getByText } = render(app());
      expect(getByText("-1")).toBeDefined();
      end();
    });

    fireEvent.click(getByText("-"));
  });

})