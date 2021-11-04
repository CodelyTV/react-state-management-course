import { RECEIVE_PRODUCTS } from "../constants";
import produce from "immer";

const initialState = [];

const reducer = produce((draft = initialState, action) => {
  const { type } = action;

  if (type === RECEIVE_PRODUCTS) {
    draft = action.products.reduce((result, product) => {
      result[product.id] = product;
      return result;
    }, {});
  }

  return draft;
});

export default reducer;
