// Componente Product Details

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { CartContext } from "../contexts/CartContext";
import "../styles/ProductDetailsComponent.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: products, loading } = useProducts();
  const { addToCart } = useContext(CartContext);
  const [successMsg, setSuccessMsg] = useState("");

  // Mostramos un mensaje de carga
  if (loading) return <p>Loading product details...</p>;

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <p>Product not found!</p>;

  const handleAddToCart = () => {
    addToCart(product);
    setSuccessMsg("Product added successfully!");
    setTimeout(() => setSuccessMsg(""), 2000);
  };

  return (
    <div className="product-details-container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> {product.price}€
      </p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {successMsg && <p className="success-msg">{successMsg}</p>}
    </div>
  );
};

export default ProductDetails;
