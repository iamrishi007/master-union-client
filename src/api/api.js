import axios from "axios";

const API = axios.create({
  baseURL: "https://rcm-backend-1-qqdu.onrender.com/api", // your backend
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
