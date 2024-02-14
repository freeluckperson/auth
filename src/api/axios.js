import axios from "axios";

const DB_URL = "https://server-express-docker.onrender.com";
// const DB_URL = "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: DB_URL,
  withCredentials: true,
});

export const registerRequest = (user) =>
  axiosInstance.post(`/api/register`, user);

export const loginRequest = (user) => axiosInstance.post(`/api/login`, user);

export const logoutRequest = () => axiosInstance.post(`/api/logout`);
