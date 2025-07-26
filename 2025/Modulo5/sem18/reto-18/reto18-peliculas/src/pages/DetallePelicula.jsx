// src/pages/DetallePelicula.jsx
import { useParams } from "react-router-dom";
import peliculas from "../data/movies.js";

function DetallePelicula() {
  const { id } = useParams();
  const pelicula = peliculas.find((p) => p.id === parseInt(id));

  if (!pelicula) {
    return <p>Película no encontrada</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{pelicula.title}</h2>
      <img
        src={pelicula.image}
        alt={pelicula.title}
        style={{ maxWidth: "300px", borderRadius: "8px", marginBottom: "20px" }}
      />
      <p style={{ fontSize: "1.1rem" }}>{pelicula.description}</p>
      <br />
      <a href="/" style={{ textDecoration: "none", color: "#007BFF" }}>← Volver al inicio</a>
    </div>
  );
}

export default DetallePelicula;