import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // Express backend
  withCredentials: true, // allow cookies (JWT)
});

export default instance;
