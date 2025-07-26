import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import ProductList from "./pages/Product/ProductList.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Layout from "./components/Layout/Layout.jsx";
import SingleProduct from "./pages/Product/SingleProduct.jsx";

const Router = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Layout />}>
        <Route index element={<Home />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/productos" element={<ProductList />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default Router;
