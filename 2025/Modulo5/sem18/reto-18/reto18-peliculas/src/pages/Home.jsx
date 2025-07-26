import { Link } from "react-router-dom";
import movies from "../data/movies.js";

export default function Home() {
  return (
    <div>
      <h1>Películas</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {movies.map((movie) => (
          <li key={movie.id} style={{ marginBottom: "20px" }}>
            <Link to={`/pelicula/${movie.id}`} style={{ textDecoration: "none", color: "black" }}>
              <img src={movie.image} alt={movie.title} />
              <h2>{movie.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
