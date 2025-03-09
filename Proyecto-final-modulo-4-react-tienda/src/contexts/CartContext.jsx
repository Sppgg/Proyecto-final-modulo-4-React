// src/contexts/CartContext.js
import React, { createContext, useReducer } from "react";
import { useState } from "react";

export const CartContext = createContext();
// const [products, setProducts] = useState([]);
const initialState = {
  cartItems: [],
};

// Funciones manejadoras para incrementar y decrementar productos añadidos al carrito

const decreaseProduct = (productId) => {
  // encontrar el elemento que sea = al elemto id. si eso existe, elemento.cantidad < 1 deleteProduct

  setProducts(
    products.map((element) => {
      if (element.cantidad < 1) {
        console.log("Hola desde decreaseproduct");
      } else {
        element.id === productId
          ? { ...element, quantity: element.quantity - 1 }
          : element;
      }
    })
  );
};

const increaseProduct = (product) => {
  // const existingProducts = productos.find((elemento)=> elemento.id === producto.id);
  setProducts(
    products.map((element) =>
      element.id === product.id
        ? { ...element, quantity: (element.quantity || 1) + 1 }
        : element
    )
  );
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
