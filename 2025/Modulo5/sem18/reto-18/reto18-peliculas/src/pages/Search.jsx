// src/pages/Search.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import peliculas from "../data/movies.js";

function Search() {
  const [query, setQuery] = useState("");

  const resultados = peliculas.filter((pelicula) =>
    pelicula.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Búsqueda de Películas</h2>
      <input
        type="text"
        placeholder="Buscar por título..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <ul>
          {resultados.length > 0 ? (
            resultados.map((pelicula) => (
              <li key={pelicula.id}>
                <Link to={`/pelicula/${pelicula.id}`}>{pelicula.title}</Link>
              </li>
            ))
          ) : (
            <p>No se encontraron películas.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default Search;