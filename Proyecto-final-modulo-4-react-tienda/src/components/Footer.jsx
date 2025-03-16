// src/components/Footer.jsx
import React from "react";
import "../styles/FooterComponent.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Muestra el año actual */}
      <p>
        &copy; {new Date().getFullYear()} Smart Home Store. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
