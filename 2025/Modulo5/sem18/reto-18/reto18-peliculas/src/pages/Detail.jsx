import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies.js";

export default function Detail() {
  const { id } = useParams(); // capturamos el ID desde la URL
  const navigate = useNavigate(); // para volver atrás

  const movie = movies.find((pelicula) => pelicula.id === parseInt(id));

  if (!movie) {
    return <h1>Película no encontrada</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "20px" }}>
        ⬅️ Volver
      </button>

      <h1>{movie.title}</h1>
      <img
        src={movie.image}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "8px", marginBottom: "20px" }}
      />
      <p style={{ fontSize: "1.2rem" }}>{movie.description}</p>
    </div>
  );
}