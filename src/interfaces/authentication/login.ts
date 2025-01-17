/**
 * Interface representing the response for a login request.
 * 
 * @property {boolean} status - Indicates whether the login was successful or not.
 * @property {string} message - A message providing additional details about the login attempt.
 */
export interface LoginResponse {
    status: boolean;
    message: string;
}

/**
 * Interface representing the response for sending a password reset URL.
 * 
 * @property {boolean} status - Indicates whether the reset URL was successfully sent or not.
 * @property {string} message - A message providing additional details about the reset URL request.
 */
export interface SentResetUrlResponse {
    status: boolean;
    message: string;
}

/**
 * Interface representing the response for sending a password reset URL.
 * 
 * @property {boolean} status - Indicates whether the reset URL was successfully sent or not.
 * @property {string} message - A message providing additional details about the reset URL request.
 */
export interface LogoutResponse {
    status: boolean;
    message: string;
}

/**
 * Interface representing the response for a password reset operation.
 * 
 * @property {boolean} status - Indicates whether the password was successfully reset or not.
 * @property {string} message - A message providing additional details about the password reset.
 */
export interface ResetPasswordResponse {
    status: boolean;
    message: string;
}
