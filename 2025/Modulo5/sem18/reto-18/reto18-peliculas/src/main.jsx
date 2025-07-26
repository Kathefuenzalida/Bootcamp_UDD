import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importa tus componentes
import ListaPeliculas from "./pages/ListaPeliculas";
import DetallePelicula from "./pages/DetallePelicula";
import Search from "./pages/Search";

import "./index.css"; // si tienes estilos globales

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListaPeliculas />
  },
  {
    path: "/pelicula/:id",
    element: <DetallePelicula />
  },
  {
    path: "/buscar",
    element: <Search />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);