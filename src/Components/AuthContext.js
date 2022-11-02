import { useReducer } from "react";
import { createContext } from "react";
import { useContext } from "react";
import shopData from "../shopData";

const UserContext = createContext();

export const ACTIONS = {
  ADD_TO_CART: "add-to-cart",
  REMOVE_FROM_CART: "remove-from-cart",
  UPDATE_PRICE: "update-price",
};

const initialState = {
  shopData: shopData,
  cart: [],
  totalPrice: 0,
  count: 0,
};

const reducer = (initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_TO_CART:
      return {
        ...initialState,
        cart: [
          ...initialState.cart,
          { ...payload.currItem, id: Math.random(), count: 1 },
        ],
        totalPrice: (initialState.totalPrice += payload.priceItem / 2),
      };

    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...initialState,
        cart: initialState.cart.filter(
          (Product) => Product.id !== payload.currItem
        ),
        totalPrice: (initialState.totalPrice -= payload.priceItem / 2),
      };

    default:
      console.log(`${type} not defined`);
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(UserContext);
};
