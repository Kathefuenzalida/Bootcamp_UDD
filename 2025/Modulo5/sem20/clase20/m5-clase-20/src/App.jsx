import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import News from "./pages/News/News.jsx";
import Hooks from "./pages/Hooks/Hooks.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/hooks" element={<Hooks />} />
      </Route>
    </Routes>
  );
}

export default App;
