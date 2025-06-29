import axios from "axios";
import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { tokenManager } from "./utils/tokenManager";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = tokenManager.getAccessToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid, clear it
      tokenManager.removeAccessToken();
      // Note: Navigation will be handled by the components using the hooks
      // This prevents navigation issues in non-component contexts
    }
    return Promise.reject(error);
  }
);

export default apiClient;
