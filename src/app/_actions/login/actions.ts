"use server";

// Prototype Server Action Stubs for /login
// In this prototype phase, no backend calls are executed here.
// Interactions and validation are handled on the client via mock state.

export interface LoginCredentials {
  email: string;
  password?: string;
  rememberSession?: boolean;
}

export interface RegisterCredentials {
  fullName: string;
  phoneNumber: string;
  nid: string;
  email: string;
  passphrase?: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  role?: "citizen" | "sub-registrar" | "ac-land" | "bank" | "admin";
  redirectUrl?: string;
}

export const authenticateUser = async (
  _credentials: LoginCredentials
): Promise<AuthResponse> => {
  // Prototype stub declaration only
  return { success: true };
};

export const registerCitizen = async (
  _credentials: RegisterCredentials
): Promise<AuthResponse> => {
  // Prototype stub declaration only
  return { success: true };
};
