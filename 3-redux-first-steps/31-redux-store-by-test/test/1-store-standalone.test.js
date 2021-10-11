import { createStore } from "redux";

const defaultState = 0;

const counterReducer = (state = defaultState, action) => {
  const { type } = action;

  if (type === "INCREMENT") return state + 1;
  if (type === "DECREMENT") return state - 1;

  return state;
};

let store;

beforeEach(() => {
 store = createStore(counterReducer);
});

describe("Counter reducer should", () => {
  test("retrieve the state from the store", () => {
    expect(store.getState()).toEqual(0);
  });
  
  test("dispatch actions modifies the state", () => {
    store.subscribe(() => {
      expect(store.getState()).toEqual(1);
    });
  
    store.dispatch({ type: "INCREMENT" });
  });
  
})