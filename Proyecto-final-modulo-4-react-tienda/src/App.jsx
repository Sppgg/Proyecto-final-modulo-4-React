// APP

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Importamos las páginas
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./components/RequireAuth";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Ruta de login abierta */}
          <Route path="/login" element={<LoginPage />} />
          {/* Rutas protegidas */}
          <Route
            path="/"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route
            path="/product/:id"
            element={
              <RequireAuth>
                <ProductDetailsPage />
              </RequireAuth>
            }
          />
          <Route
            path="/cart"
            element={
              <RequireAuth>
                <CartPage />
              </RequireAuth>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
