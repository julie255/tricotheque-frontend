import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authApi } from "../auth";
import { tokenManager } from "../utils/tokenManager";
import type { LoginRequest, RegisterRequest } from "../types";

// React Query keys
export const authKeys = {
  all: ["auth"] as const,
  profile: () => [...authKeys.all, "profile"] as const,
};

// Hook for user registration
export const useRegister = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: RegisterRequest) => authApi.register(data),
    onSuccess: (data) => {
      tokenManager.setAccessToken(data.access_token);

      queryClient.invalidateQueries({ queryKey: authKeys.profile() });

      navigate("/");
    },
    onError: (error) => {
      console.error("Registration failed:", error);
    },
  });
};

// Hook for user login
export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginRequest) => authApi.login(data),
    onSuccess: (data) => {
      tokenManager.setAccessToken(data.access_token);

      queryClient.invalidateQueries({ queryKey: authKeys.profile() });

      navigate("/");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};

// Hook for user logout
export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      queryClient.clear();

      navigate("/connexion");
    },
    onError: (error) => {
      console.error("Logout failed:", error);
      queryClient.clear();
      navigate("/connexion");
    },
  });
};

// Hook for getting user profile
export const useProfile = () => {
  return useQuery({
    queryKey: authKeys.profile(),
    queryFn: () => authApi.getProfile(),
    enabled: tokenManager.isAuthenticated(),
    staleTime: 5 * 60 * 1000,
  });
};
