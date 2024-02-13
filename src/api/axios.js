import axios from "axios";

const DB_URL = "https://server-express-docker.onrender.com";

export const registerRequest = (user) =>
  axios.post(`${DB_URL}/api/register`, user);