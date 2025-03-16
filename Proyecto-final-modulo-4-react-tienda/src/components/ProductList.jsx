// Componente para la lista de productos

import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { CartContext } from "../contexts/CartContext";
import "../styles/ProductListComponent.css";

const ProductList = () => {
  const { data: products, loading } = useProducts();
  const { addToCart } = useContext(CartContext);
  const [successMsg, setSuccessMsg] = useState("");

  if (loading) return <p>Loading products...</p>;

  // Función que recibe el producto a agregar al carrito + mostrar mensaje de agregado
  const handleAddToCart = (product) => {
    addToCart(product);
    setSuccessMsg("Product added successfully!");
    setTimeout(() => setSuccessMsg(""), 2000);
  };

  return (
    <div className="product-list-container">
      <h1>Smart Home Store</h1>
      {successMsg && <p className="success-msg">{successMsg}</p>}
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}€</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
            <br />
            <button onClick={() => handleAddToCart(product)}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
