import { useContext } from "react";
import { CartContext } from "../cart/CartContext";

export default function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
