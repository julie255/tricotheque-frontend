import apiClient from "./config";
import type { AuthResponse, LoginRequest, RegisterRequest } from "./types";

// Authentication API endpoints
export const authApi = {
  // Register a new user
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>("/auth/register", data);
    return response.data;
  },

  // Login user
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>("/auth/login", data);
    return response.data;
  },

  logout: async (): Promise<void> => {
    try {
      await apiClient.post("/auth/logout");
    } catch (error) {
      console.warn("Logout request failed:", error);
    } finally {
      localStorage.removeItem("accessToken");
    }
  },

  getProfile: async () => {
    const response = await apiClient.get("/auth/profile");
    return response.data;
  },
};
