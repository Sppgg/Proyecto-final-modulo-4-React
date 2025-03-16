// Componente para el header

import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderComponent.css";
import { AuthContext } from "../contexts/AuthContext";
import { FaShoppingCart } from "react-icons/fa"; //importamos el icono del carrito

const Header = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </li>
          {auth.token && (
            <li>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
