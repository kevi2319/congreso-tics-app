import { Link } from "react-router-dom";

export default function ParticipantCard({ participante }) {
  return (
    <div className="participant-card shadow-sm text-center p-3">
      <img
        src={participante.avatarUrl}
        alt={participante.nombreCompleto}
        className="rounded-circle avatar-list mb-3"
      />
      <h5 className="fw-bold">{participante.nombreCompleto}</h5>
      <p className="text-muted small mb-1">{participante.ocupacion}</p>
      <p className="text-primary">@{participante.twitter}</p>
      <Link to={`/gafete/${participante.id}`} className="btn btn-outline-primary btn-sm mt-2">
        Ver Gafete
      </Link>
    </div>
  );
}
