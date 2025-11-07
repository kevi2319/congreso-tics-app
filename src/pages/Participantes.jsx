import { useEffect, useState } from "react";
import { obtenerParticipantes } from "../services/api";
import ParticipantCard from "../components/ParticipantCard";

export default function Participantes() {
  const [listado, setListado] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const cargar = async () => {
    const data = await obtenerParticipantes(busqueda);
    setListado(data);
  };

  useEffect(() => { cargar(); }, [busqueda]);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h2 className="text-primary">Participantes Registrados</h2>
        <input
          type="text"
          className="form-control search-input"
          placeholder="Buscar por nombre o apellido..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="row">
        {listado.length === 0 ? (
          <p className="text-muted text-center mt-4">No se encontraron participantes.</p>
        ) : (
          listado.map((p) => (
            <div key={p.id} className="col-md-4 col-sm-6 mb-4">
              <ParticipantCard participante={p} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
