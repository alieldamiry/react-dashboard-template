import axios from "axios";
// import { store } from "src/redux/store";

// Default config options
const defaultOptions = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {},
};

// Create instance
const api = axios.create(defaultOptions);

// Set the AUTH token for any request
api.interceptors.request.use(function (config: any) {
  const token = localStorage.getItem("access_token");
  config.headers.Authorization = token ? `bearer ${token}` : "";
  return config;
});

export default api;
