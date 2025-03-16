// Contexto para la autenticación

import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem("authToken");
  const [auth, setAuth] = useState({
    token: storedToken,
    user: storedToken ? { username: "admin" } : null, // Usuario placeholder
  });

  const login = (username, password) => {
    // Para simplificar, asumimos que el usuario y contraseña son 'admin'
    if (username === "admin" && password === "admin") {
      const token = "dummyToken123";
      localStorage.setItem("authToken", token);
      setAuth({ token, user: { username } });
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuth({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
