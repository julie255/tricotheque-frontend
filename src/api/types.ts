// API Response Types
export interface AuthResponse {
  access_token: string;
  user?: {
    id: string;
    email: string;
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// Generic API Response wrapper
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

// Error Response
export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}
