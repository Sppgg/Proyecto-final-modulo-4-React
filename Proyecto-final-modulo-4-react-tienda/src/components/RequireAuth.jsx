// src/components/RequireAuth.jsx

import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const RequireAuth = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  // Si no hay token, redirige a la página de login y almacena la ubicación actual
  if (!auth.token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
