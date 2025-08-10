import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, config = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url, config);
        setData(response.data);
      } catch (err) {
        setError(err);
        console.error("Error en la petición:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // 🔹 IMPORTANTE: Aquí se llama a la función
  }, [url, config]);

  return { data, loading, error };
};

export default useFetch;
