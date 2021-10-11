const defaultState = 0;

const counterReducer = (state = defaultState, action) => {
  const { type } = action;

  if (type === "INCREMENT") return state + 1;
  if (type === "DECREMENT") return state - 1;

  return state;
};

describe("Counter reducer should", () => {
  test("increment the counter", () => {
    const currentState = 0;
    const action = { type: "INCREMENT" };
    const newState = counterReducer(currentState, action);

    expect(newState).toEqual(1);
  });

  test("decrement the counter", () => {
    const currentState = 1;
    const action = { type: "DECREMENT" };
    const newState = counterReducer(currentState, action);

    expect(newState).toEqual(0);
  });

})

const initialState = {
  users: [],
}

function appReducer(state = initialState, action) {
 switch (action.type) {
   case "ADD_USER": {
     return {
       ...state,
       users: [ ...state.users, action.payload ]
     }
   }
   default:
     return state
 }
}