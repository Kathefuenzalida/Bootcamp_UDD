
import React, { useMemo } from "react";
import useFetch from "../../useFetch"; // ajusta si está en hooks: "../../hooks/useFetch"


const News = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const API_URL = useMemo(() => {
    return `https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=es&max=10`;
  }, [API_KEY]);

  const { data, loading, error } = useFetch(API_URL);

  if (loading) return <p>Cargando noticias...</p>;
  if (error) return <p>Error al cargar noticias</p>;

  return (
    <div>
      <h2>Últimas Noticias</h2>
      <ul>
        {data?.articles?.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noreferrer">
              <strong>{article.title}</strong>
            </a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
