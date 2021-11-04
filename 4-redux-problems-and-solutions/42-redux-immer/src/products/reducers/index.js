import { RECEIVE_PRODUCTS } from "../constants";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.reduce((result, product) => {
        result[product.id] = product;
        return result;
      }, {});
    default:
      return state;
  }
};

export default reducer;
