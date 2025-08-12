import { createContext, useEffect, useReducer } from "react";
import { cartReducer, initialState } from "./cartReducer";
import { loadCart, saveCart } from "../utils/storage";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const items = loadCart();
    dispatch({ type: "SET", payload: items });
  }, []);

  useEffect(() => {
    if (state.items.length > 0) {
      saveCart(state.items);
    }
  }, [state.items]);

  const addToCart = (product) => dispatch({ type: "ADD", payload: product });
  const removeOne = (id) => dispatch({ type: "REMOVE_ONE", payload: id });
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR" });

  const value = {
    items: state.items,
    totalQty: state.totalQty,
    totalPrice: state.totalPrice,
    addToCart,
    removeOne,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
