import { connect } from "react-redux";
import { addToCart } from "./actions";
import ProductList from "./components/ProductList";

import { createSelector } from "reselect";

const selectProducts = (state) => state.products;
const productsResult = (products) => Object.values(products);

const retrieveProducts = createSelector(selectProducts, productsResult);

const mapStateToProps = (state) => {
  return {
    products: retrieveProducts(state),
  };
};

export default connect(mapStateToProps, { onAddToCartClicked: addToCart })(
  ProductList
);
