// src/components/ProductDetails.jsx
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: products, loading } = useProducts();
  const { addToCart } = useContext(CartContext);

  // Puedes descomentar la siguiente línea si deseas mostrar un mensaje de carga
  if (loading) return <p>Loading product details...</p>;

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <p>Product not found!</p>;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "400px", objectFit: "cover" }}
      />
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> {product.price}€
      </p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
