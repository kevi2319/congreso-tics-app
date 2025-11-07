import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <div className="text-center landing">
      <img src={logo} alt="Congreso TICS" className="logo mt-5" />
      <h1>Congreso en Tecnologías de la Información</h1>
      <p>Universidad Tecnológica de León</p>
      <Link to="/participantes" className="btn btn-primary mt-3">Entrar</Link>
    </div>
  );
}
