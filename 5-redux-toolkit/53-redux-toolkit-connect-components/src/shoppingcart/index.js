import { connect } from "react-redux";
import { checkout } from "./slices";

import ShoppingCart from "./components/ShoppingCart";

const mapStateToProps = (state) => {
  const products = state.products;
  const productsOnCard = Object.entries(state.shoppingcart.products);

  return {
    products: productsOnCard.map(([key, value]) => {
      return { ...products[key], quantity: value };
    }),
  };
};

export default connect(mapStateToProps, { onCheckoutClicked: checkout })(
  ShoppingCart
);
