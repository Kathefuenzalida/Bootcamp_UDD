import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ProductList from "./pages/Product/ProductList";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import SingleProduct from "./pages/Product/SingleProduct";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/productos" element={<ProductList />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;

// EJERCICIO 1
// Agrega dos rutas extras en el componente Router con su path y componente segun corresponda:
// NOMBRE RUTA: '/contacto' NOMBRE DEL COMPONENTE: Contact.jsx
// NOMBRE RUTA: '/productos NOMBRE DEL COMPONENTE: ProductList.jsx
