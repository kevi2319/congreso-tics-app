import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerParticipante } from "../services/api";
import logo from "../assets/logo.png";
import qr from "../assets/qr.png"; // imagen QR opcional

export default function Gafete() {
  const { id } = useParams();
  const [p, setP] = useState(null);
  const [reverso, setReverso] = useState(false);

  useEffect(() => {
    obtenerParticipante(id).then((res) => setP(res.data));
  }, [id]);

  if (!p) return <p className="text-center mt-5">Cargando...</p>;

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-3">Gafete del Participante</h2>
      <div
        className={`gafete-container ${reverso ? "flip" : ""}`}
        onClick={() => setReverso(!reverso)}
      >
        {/* Frente */}
        <div className="gafete frente">
          <div className="header-gafete">
            <img src={logo} alt="Logo UTL" className="logo-gafete" />
            <h5>Congreso TIC’s 2025</h5>
          </div>
          <div className="foto-container">
            <img src={p.avatarUrl} alt={p.nombre} className="foto-gafete" />
          </div>
          <div className="info-gafete">
            <h4>{p.nombre} {p.apellidos}</h4>
            <p>{p.ocupacion}</p>
            <p className="text-muted">@{p.twitter}</p>
          </div>
          <div className="footer-gafete">
            <small>Universidad Tecnológica de León</small>
          </div>
        </div>

        {/* Reverso */}
        <div className="gafete reverso">
          <div className="reverso-info">
            <h5>Información del Participante</h5>
            <p><strong>ID:</strong> {p.id}</p>
            <p><strong>Email:</strong> {p.email}</p>
            <p><strong>Twitter:</strong> @{p.twitter}</p>
            <img src={qr} alt="QR" className="qr-gafete" />
          </div>
          <div className="footer-reverso">
            <small>© 2025 Universidad Tecnológica de León</small>
          </div>
        </div>
      </div>

      <p className="mt-3 text-muted">(Haz clic para girar el gafete)</p>
    </div>
  );
}
