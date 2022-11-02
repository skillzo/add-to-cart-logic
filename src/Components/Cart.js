import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { ACTIONS } from "./AuthContext";

const Product = () => {
  const { state, dispatch } = useAuth();

  const removeFromCart = (product) => {
    console.log("removing Item");
    if (product.count > 1) {
      product.count--;
    } else {
      dispatch({
        type: ACTIONS.REMOVE_FROM_CART,
        payload: { currItem: product.id, priceItem: product.price },
      });
    }
  };
  return (
    <div>
      <h3>Cart</h3>
      <Link to="/">Home</Link>
      {state.cart.map((product) => {
        return (
          <div className="product" key={product.id}>
            <h3>
              {product.name} ({product.count})
            </h3>

            <h3>{product.price}</h3>
            <div className="add-button" onClick={() => removeFromCart(product)}>
              remove
            </div>
          </div>
        );
      })}

      <h3>Total ={state.totalPrice}</h3>
    </div>
  );
};

export default Product;
