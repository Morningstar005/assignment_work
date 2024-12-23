import axios from "axios";
export const baseUrl = "https://www.xbunicorn.com/api/";

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
    const token = localStorage.getItem("accessToken"); 
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; 
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

export default api; 
