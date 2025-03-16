// Componente para el header

import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderComponent.css";
import { AuthContext } from "../contexts/AuthContext";
import { FaShoppingCart } from "react-icons/fa"; //importamos el icono del carrito
import logo from "../assets/logo.png";

const Header = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Smart Home Store Logo" className="logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/cart">
              <FaShoppingCart size={20} color="#333" />
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
