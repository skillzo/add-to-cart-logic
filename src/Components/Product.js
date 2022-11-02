import { useAuth } from "./AuthContext";
import { ACTIONS } from "./AuthContext";

const Product = () => {
  const { state, dispatch } = useAuth();
  const shopData = state.shopData;
  console.log(state.totalPrice);
  const addToCart = (currItem) => {
    const itemExists = state.cart.find((item) => item.name === currItem.name);
    if (itemExists) {
      console.log(itemExists);
      itemExists.count = itemExists.count + 1;
      state.totalPrice += itemExists.price;
      return;
    }
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: {
        currItem: currItem,
        priceItem: currItem.price,
      },
    });
  };
  return (
    <>
      <h3>Products</h3>
      {shopData.map((product) => {
        return (
          <div className="product" key={Math.random()}>
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <div
              className="add-button"
              onClick={() => {
                addToCart(product);
              }}
            >
              Add
            </div>
          </div>
        );
      })}
      <h3>Total= {state.totalPrice}</h3>
    </>
  );
};

export default Product;
