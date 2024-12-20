import axios from "axios";
export const baseUrl = "http://13.234.71.136:8550/api/";

export const baseAPI = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // Check localStorage for the token
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Attach token to Authorization header
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use((response) => {
  if (response.status === 204) {
    return response;
  } else if (typeof response.data == "string") {
    response.data = JSON.parse(response.data);
  }

  return response;
});
