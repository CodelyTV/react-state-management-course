import React from "react";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";

import { render, fireEvent, cleanup } from "@testing-library/react";

const defaultState = {
  counter: 0,
};

const counterReducer = (state = defaultState, action) => {
  const { type } = action;

  if (type === "INCREMENT") {
    return { counter: state.counter + 1 };
  }

  if (type === "DECREMENT") {
    return { counter: state.counter - 1 };
  }

  return state;
};

const Counter = ({ counter, onIncrement, onDecrement }) => (
  <div>
    <span>{counter}</span>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const mapStateToProps = (data) => data;

const mapDispatchToProps = (dispatch) => ({
  onIncrement() {
    dispatch({ type: "INCREMENT" });
  },
  onDecrement() {
    dispatch({ type: "DECREMENT" });
  },
});

const CounterWrapper = connect(mapStateToProps, mapDispatchToProps)(Counter);

let store;

const app = () => {
  store = createStore(counterReducer);

  return (
    <Provider store={store}>
      <CounterWrapper />
    </Provider>
  );
};

describe("Counter component connected should", () => {
  test("initial counter is zero", () => {
    const { getByText } = render(app());

    expect(getByText("0")).toBeDefined();
  });

  test("increment when `+` button is pressed", () => {
    const { getByText } = render(app());

    fireEvent.click(getByText("+"));

    expect(getByText("1")).toBeDefined();
  });

  test("decrement when `-` button is pressed", () => {
    const { getByText } = render(app());

    fireEvent.click(getByText("-"));

    expect(getByText("-1")).toBeDefined();
  });

  afterEach(cleanup);

})