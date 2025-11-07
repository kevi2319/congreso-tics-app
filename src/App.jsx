import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Registro from "./pages/Registro";
import Participantes from "./pages/Participantes";
import Gafete from "./pages/Gafete";
import Navbar from "./components/Navbar";
import "./styles.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/registro" element={<Registro />} />
         <Route path="/home" element={<Home />} />
        <Route path="/participantes" element={<Participantes />} />
        <Route path="/listado" element={<Participantes />} /> {/* alias */}
        <Route path="/gafete/:id" element={<Gafete />} />
        <Route path="*" element={<h2 className="text-center mt-5 text-danger">404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
