import { retrieveProducts } from '../repositories/ProductsRepository';
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants'

export const listProducts = () => {
  const products = retrieveProducts();

  return {
    type: RECEIVE_PRODUCTS,
    products,
  };
};


export const addToCart = (product)=> {
  return {
    type: ADD_TO_CART,
    product,
  };
};
