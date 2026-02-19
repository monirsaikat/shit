import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL as string;

export const http = axios.create({
  baseURL: API_URL,
  withCredentials: true, // important later for cookies/session
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Optional: global error handling
http.interceptors.response.use(
  (res) => res,
  (err) => {
    const msg =
      err?.response?.data?.message ||
      err?.response?.data?.error ||
      err?.message ||
      "Request failed";
    return Promise.reject(new Error(msg));
  }
);
