import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold text-white">
          <i className="bi bi-mortarboard-fill me-2"></i> Congreso TICs UTL
        </Link>

        <div className="d-flex align-items-center">
          <Link
            to="/registro"
            className={`btn ${
              location.pathname === "/registro" ? "btn-light text-primary" : "btn-outline-light"
            } me-2`}
          >
            Registro
          </Link>

          <Link
            to="/participantes"
            className={`btn ${
              location.pathname === "/participantes" || location.pathname === "/listado"
                ? "btn-light text-primary"
                : "btn-outline-light"
            }`}
          >
            Participantes
          </Link>
        </div>
      </div>
    </nav>
  );
}
