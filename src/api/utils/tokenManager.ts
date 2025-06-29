// Token management utilities
export const tokenManager = {
  getAccessToken: (): string | null => {
    return localStorage.getItem("accessToken");
  },

  setAccessToken: (token: string): void => {
    localStorage.setItem("accessToken", token);
  },

  removeAccessToken: (): void => {
    localStorage.removeItem("accessToken");
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem("accessToken");
  },

  getTokenExpiration: (): Date | null => {
    const token = localStorage.getItem("accessToken");
    if (!token) return null;

    try {
      // If your token is a JWT, you can decode it to get expiration
      const payload = JSON.parse(atob(token.split(".")[1]));
      return new Date(payload.exp * 1000);
    } catch (error) {
      console.warn("Failed to parse token expiration:", error);
      return null;
    }
  },

  isTokenExpired: (): boolean => {
    const expiration = tokenManager.getTokenExpiration();
    if (!expiration) return true;
    return new Date() > expiration;
  },
};
