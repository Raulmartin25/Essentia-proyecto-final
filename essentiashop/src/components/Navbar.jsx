import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import Cart from "./Cart";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <nav className={`navbar ${open ? "is-open" : ""}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand">
          ESSENTIA
        </Link>

        <ul className="navbar__links">
          <li>
            <NavLink to="/women">Mujer</NavLink>
          </li>
          <li>
            <NavLink to="/men">Hombre</NavLink>
          </li>
          <li>
            <NavLink to="/accessories">Accesorios</NavLink>
          </li>
          <li>
            <NavLink to="/sale">Sale</NavLink>
          </li>
        </ul>

        <div className="navbar__actions">
          <NavLink to="/login">
            <button
              className="bi bi-person"
              id="btn-user"
              aria-label="Cuenta"
            ></button>
          </NavLink>

          <button
            className="bi bi-heart"
            id="btn-heart"
            aria-label="Favoritos"
          ></button>
          <button
            className="bi bi-cart"
            id="btn-cart"
            aria-label="Carrito"
            onClick={() => setCartOpen(true)}
          ></button>
          <button
            className="bi bi-list"
            id="navbar__toggle"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          ></button>
        </div>
        <Cart
          open={cartOpen}
          setOpen={setCartOpen}
          cartItems={cartItems}
          removeItem={removeItem}
        />
      </div>

      <div className="navbar__drawer">
        <ul className="navbar__drawer-links">
          <li>
            <NavLink to="/women" onClick={() => setOpen(false)}>
              Mujer
            </NavLink>
          </li>
          <li>
            <NavLink to="/men" onClick={() => setOpen(false)}>
              Hombre
            </NavLink>
          </li>
          <li>
            <NavLink to="/accessories" onClick={() => setOpen(false)}>
              Accesorios
            </NavLink>
          </li>
          <li>
            <NavLink to="/sale" onClick={() => setOpen(false)}>
              Sale
            </NavLink>
          </li>
        </ul>
        <div className="navbar__drawer-actions">
          <NavLink to="/login">
            <button className="bi bi-person" aria-label="Cuenta"></button>
          </NavLink>
          <button className="bi bi-heart" aria-label="Favoritos"></button>
        </div>
      </div>
    </nav>
  );
}
