import axios from "axios";

const api = axios.create({
  baseURL: "https://congresoapi.onrender.com/api",
});

export const obtenerParticipantes = async (search = "") => {
  const res = await api.get(`/listado${search ? `?q=${search}` : ""}`);
  return res.data;
};

export const registrarParticipante = (data) => api.post("/registro", data);
export const obtenerParticipante = (id) => api.get(`/participante/${id}`);
