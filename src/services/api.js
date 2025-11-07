import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://congresoapi.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const obtenerParticipantes = async (search = "") => {
  const res = await api.get(`/listado${search ? `?q=${search}` : ""}`);
  return res.data;
};

export const registrarParticipante = async (data) => {
  const res = await api.post("/registro", data);
  return res.data;
};

export const obtenerParticipante = async (id) => {
  const res = await api.get(`/participante/${id}`);
  return res.data;
};

export default api;
