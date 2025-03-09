// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderComponent.css";
import { FaShoppingCart } from "react-icons/fa"; //importamos el icono del carrito

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart size={20} color="#333" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
