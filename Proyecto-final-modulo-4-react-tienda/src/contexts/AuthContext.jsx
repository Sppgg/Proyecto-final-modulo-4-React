// Contexto para la autenticación

import React, { createContext, useState } from "react";

// Creamos el contexto de autenticación
export const AuthContext = createContext();

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  // Obtenemos el token almacenado del localStorage
  const storedToken = localStorage.getItem("authToken");
  // Estado de autenticación: token y objeto usuario (placeholder)
  const [auth, setAuth] = useState({
    token: storedToken,
    user: storedToken ? { username: "admin" } : null, // Usuario placeholder
  });
  // Función para iniciar sesión: aceptamos "admin" / "admin"
  const login = (username, password) => {
    // Para simplificar, asumimos que el usuario y contraseña son 'admin'
    if (username === "admin" && password === "admin") {
      const token = "dummyToken123";
      // Guardamos el token en localStorage
      localStorage.setItem("authToken", token);
      setAuth({ token, user: { username } });
      return true;
    }
    return false;
  };
  // Función para cerrar sesión: elimina el token y limpia el estado
  const logout = () => {
    localStorage.removeItem("authToken");
    setAuth({ token: null, user: null });
  };
  // Proveemos los valores del contexto a los componentes hijos
  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
