// src/contexts/CartContext.js
import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // Incrementa la cantidad del producto ya agregado
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // Agrega el producto con cantidad 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }
    case "INCREASE_PRODUCT": {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }
    case "DECREASE_PRODUCT": {
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) => {
            if (item.id === action.payload) {
              // Si la cantidad es mayor a 1, disminuye; caso contrario, lo elimina
              if (item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
              }
              // De lo contrario, lo retornamos como null para eliminarlo
              return null;
            }
            return item;
          })
          .filter(Boolean), // Filtra y elimina aquellos productos nulos
      };
    }
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

  const increaseProduct = (productId) => {
    dispatch({ type: "INCREASE_PRODUCT", payload: productId });
  };

  const decreaseProduct = (productId) => {
    dispatch({ type: "DECREASE_PRODUCT", payload: productId });
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
