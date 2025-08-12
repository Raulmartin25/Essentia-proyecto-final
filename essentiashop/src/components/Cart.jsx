import "./Cart.css";
import useCart from "../context/hooks/useCart";

export default function Cart({ open, setOpen }) {
  const { items, totalQty, totalPrice, removeOne, removeItem, clearCart } =
    useCart();

  return (
    <div className={`cart-modal ${open ? "open" : ""}`}>
      <div className="cart-modal__content">
        <button className="cart-modal__close" onClick={() => setOpen(false)}>
          X
        </button>
        <h2>Carrito de Compras</h2>

        {items.length === 0 ? (
          <p>Su carrito está vacío.</p>
        ) : (
          <>
            <ul>
              {items.map((it) => (
                <li key={it.id}>
                  <img src={it.image} alt={it.title} />
                  <div>
                    <h3>{it.title}</h3>
                    <p>
                      ${it.price} × {it.qty}
                    </p>
                    <div className="cart-actions">
                      <button onClick={() => removeOne(it.id)}> - </button>
                      <button onClick={() => removeItem(it.id)}>
                        Eliminar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <span>Items: {totalQty}</span>
              <strong>Total: ${totalPrice.toFixed(2)}</strong>
            </div>
            <button
              className="continue-shopping"
              onClick={() => setOpen(false)}
            >
              Continuar comprando
            </button>
            <button className="checkout">Ir a pagar</button>
            <button className="clear" onClick={clearCart}>
              Vaciar carrito
            </button>
          </>
        )}
      </div>
    </div>
  );
}
