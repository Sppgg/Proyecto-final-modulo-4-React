// aquí se muestran los productos añadidos al carrito
// src/components/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, increaseProduct, decreaseProduct } =
    useContext(CartContext);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cartItems.map((item) => (
            <li
              key={item.id}
              style={{
                marginBottom: "1rem",
                borderBottom: "1px solid #ddd",
                paddingBottom: "1rem",
              }}
            >
              <h2>{item.name}</h2>
              <p>Price: {item.price}€</p>
              <div>
                <button onClick={decreaseProduct}>-</button>
                <p>Quantity: {item.quantity}</p>
                <button onClick={increaseProduct}>+</button>
              </div>

              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
