//  un hook personalizado que encapsule alguna lógica reutilizable

import { useState, useEffect } from "react";
import productsData from "../services/products";

// Hook para obtener productos con simulación de retardo
const useProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una llamada a la API con 1 segundo de retraso
    const fetchData = () => {
      setTimeout(() => {
        setData(productsData);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default useProducts;
