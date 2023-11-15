import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://mern-buybox.vercel.app/api",
//   withCredentials: true,
// });

const instance = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
});

export default instance;
