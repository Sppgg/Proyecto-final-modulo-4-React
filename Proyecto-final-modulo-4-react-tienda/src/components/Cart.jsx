// aquí se muestran los productos añadidos al carrito

React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { cartItems, removeFromCart, increaseProduct, decreaseProduct } =
    useContext(CartContext);
  // Calcula el total sumando el precio multiplicado por la cantidad de cada producto

  const totalAmount = cartItems.reduce(
    // utilizamos reduce para recorrer el array cartItems y acumular la suma de item.price * item.quantity para cada producto.
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li className="cart-list"
              key={item.id}
              
            >
              <h2>{item.name}</h2>
              <p>Price: {item.price}€</p>
              <p>
                {" "}
                <button onClick={() => decreaseProduct(item.id)}>-</button>
                Quantity: {item.quantity}{" "}
                <span className="cart-buttons">
                    <button onClick={() => increaseProduct(item.id)}>+</button>
                    <button onClick={() => decreaseProduct(item.id)}>-</button>
                  </span>
              </p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Total: {totalAmount}€</h2>
    </div>
  );
};

export default Cart;
