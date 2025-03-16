// Contexto del carrito

import React, { createContext, useReducer } from "react";

// Creamos el contexto del carrito
export const CartContext = createContext();

// Estado inicial del carrito (array de objetos)
const initialState = {
  cartItems: [],
};

// Reducer para gestionar las acciones del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // Buscamos si el producto ya existe en el carrito
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // Si existe, incrementamos la cantidad
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // Si no existe, lo añadimos con cantidad inicial 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case "REMOVE_FROM_CART": {
      // Filtramos el producto a eliminar
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }
    case "INCREASE_PRODUCT": {
      // Incrementamos la cantidad de un producto específico
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
      // Disminuimos la cantidad de un producto, o lo eliminamos si llega a 0
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) => {
            if (item.id === action.payload) {
              // Si la cantidad es mayor a 1, disminuye; caso contrario, lo elimina
              if (item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
              }
              // Si la cantidad es 1 y se decrementa, devolvemos null para eliminarlo
              return null;
            }
            return item;
          })
          .filter(Boolean), // // Eliminamos elementos null
      };
    }
    default:
      return state;
  }
};
// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Funciones para interactuar con el carrito
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
