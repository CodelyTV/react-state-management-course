const ADD_TO_CART = "ADD_TO_CART";
const CHECKOUT = "CHECKOUT";
const SET_CART = "SET_CART";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.product.id]: state[action.product.id]
          ? ++state[action.product.id]
          : 1,
      };

    case CHECKOUT:
      return [];

    case SET_CART:
      return { ...action.products }

    default:
      return state;
  }
}

export const actions = (dispatch) => ({
  addToCart: (product) => dispatch({ type: ADD_TO_CART, product }),
  checkout: (products) => dispatch({ type: CHECKOUT, products }),
  setCart: (products) => dispatch({ type: SET_CART, products }),
});