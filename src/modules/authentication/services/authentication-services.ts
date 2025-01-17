import { LoginResponse, LogoutResponse, ResetPasswordResponse, SentResetUrlResponse } from "@/interfaces/authentication/login";
import axios from "axios";
import Cookies from "js-cookie";

/**
 * A custom hook that provides authentication-related services such as login, password reset, and sending reset URL.
 * 
 * @returns An object containing functions for handling login, sending reset URL, and resetting the password.
 */
export default function UseAuthenticationServices() {
  
  /**
   * Handles the user login by sending a POST request to the server with the provided email and password.
   * 
   * @param email - The user's email address for login.
   * @param password - The user's password for login.
   * @returns A promise that resolves to a `LoginResponse` object containing the status and message from the server.
   * @throws An error if the request fails.
   */
  const handleLogin = async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const response = await axios.post("/server/authentication/login", { email, password }, { withCredentials: true });
      return {
        status: response.data.status, // Status of the login request (success/failure)
        message: response.data.message // Message from the server (e.g., success or error message)
      };
    } catch (error) {
      throw error; // Rethrows the error in case of failure
    }
  };

  /**
   * Sends a request to the server to generate and send a password reset link to the user's email.
   * 
   * @param email - The user's email address to send the reset link.
   * @returns A promise that resolves to a `SentResetUrlResponse` object containing the status and message from the server.
   * @throws An error if the request fails.
   */
  const handleSendResetUrl = async (email: string): Promise<SentResetUrlResponse> => {
    try {
      const response = await axios.post("/server/authentication/get-reset-link", { email });
      return {
        status: response.data.status, // Status of the reset link request (success/failure)
        message: response.data.message // Message from the server (e.g., success or error message)
      };
    } catch (error) {
      throw error; // Rethrows the error in case of failure
    }
  };

  /**
   * Handles the password reset by sending a request to the server with the new password and confirmation password.
   * 
   * @param newPassword - The new password entered by the user.
   * @param confirmationPassword - The confirmation password to ensure both passwords match.
   * @returns A promise that resolves to a `ResetPasswordResponse` object containing the status and message from the server.
   * @throws An error if the request fails.
   */
  const handleResetPassword = async (newPassword: string, confirmationPassword: string): Promise<ResetPasswordResponse> => {
    try {
      const response = await axios.post("/server/authentication/reset-password", { newPassword, confirmationPassword });
      return {
        status: response.data.status, // Status of the password reset request (success/failure)
        message: response.data.message // Message from the server (e.g., success or error message)
      };
    } catch (error) {
      throw error; // Rethrows the error in case of failure
    }
  };

  /**
   * Handle logout
   * 
   * @returns A promise that resolves to a `SentResetUrlResponse` object containing the status and message from the server.
   * @throws An error if the request fails.
   */
  const handleLogout = async (): Promise<LogoutResponse> => {
    try{
        Cookies.remove("authToken");
        return{
            status:true,
            message:"Logout successful"
        }
    }catch(error){
        return{
            status:false,
            message:"Logout failed"
        }
    }
  }

  // Returns the functions for handling login, reset URL request, and password reset
  return {
    handleLogin,
    handleSendResetUrl,
    handleResetPassword,
    handleLogout
  };
}
