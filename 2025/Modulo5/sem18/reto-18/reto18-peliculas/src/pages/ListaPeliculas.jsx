import React from "react";
import { Link } from "react-router-dom";

function ListaPeliculas() {
  return (
    <div>
      <h1>Lista de Películas</h1>
      <Link to="/buscar">Ir a búsqueda</Link>
    </div>
  );
}

export default ListaPeliculas;
