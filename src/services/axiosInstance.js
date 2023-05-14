import axios from "axios";

export const axiosUrl = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 5000,
});

axiosUrl.interceptors.request.use(function (config) {
  config.headers["Access-Control-Allow-Origin"] = "*";

  return config;
});
