import axios from "axios";

// const instance = axios.create({
//   baseURL: "",
//   withCredentials: true,
// });

const instance = axios.create({
  baseURL: "http://localhost:5002/api/v1/",
  withCredentials: true,
});

export default instance;
