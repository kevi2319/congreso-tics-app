import { useState } from "react";
import { registrarParticipante } from "../services/api";

export default function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    twitter: "",
    ocupacion: "",
    avatarUrl: "",
    terminosAceptados: false,
  });
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    try {
      await registrarParticipante(form);
      alert("✅ Registro exitoso");
      setForm({
        nombre: "",
        apellidos: "",
        email: "",
        twitter: "",
        ocupacion: "",
        avatarUrl: "",
        terminosAceptados: false,
      });
    } catch (error) {
      alert("❌ Error al registrar: " + (error.response?.data?.title || "Verifica los datos"));
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="container mt-5 registro-form">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4 text-primary">Registro de Participantes</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Nombre</label>
              <input name="nombre" className="form-control" value={form.nombre} onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label>Apellidos</label>
              <input name="apellidos" className="form-control" value={form.apellidos} onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label>Correo</label>
              <input name="email" type="email" className="form-control" value={form.email} onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label>Ocupación</label>
              <input name="ocupacion" className="form-control" value={form.ocupacion} onChange={handleChange} />
            </div>
            <div className="col-md-6 mb-3">
              <label>Twitter</label>
              <input name="twitter" className="form-control" value={form.twitter} onChange={handleChange} />
            </div>
            <div className="col-md-6 mb-3">
              <label>URL del avatar (foto)</label>
              <input name="avatarUrl" className="form-control" value={form.avatarUrl} onChange={handleChange} />
            </div>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              name="terminosAceptados"
              checked={form.terminosAceptados}
              onChange={handleChange}
              required
            />
            <label className="form-check-label">Acepto términos y condiciones</label>
          </div>

          <button className="btn btn-primary w-100" disabled={enviando}>
            {enviando ? "Registrando..." : "Registrar Participante"}
          </button>
        </form>
      </div>
    </div>
  );
}
