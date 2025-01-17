/**
 * Validates an email address using a regular expression.
 * 
 * The email is considered valid if it matches the pattern of a typical email address:
 * - It contains non-whitespace characters before and after the '@' symbol.
 * - It has a domain part with a '.' separating the domain name and the top-level domain.
 *
 * @param {string} email - The email address to be validated.
 * @returns {boolean} Returns `true` if the email is valid, otherwise `false`.
 * 
 * @example
 * validateEmail('user@example.com'); // Returns true
 * validateEmail('invalid-email');   // Returns false
 */
export const validateEmail = (email: string): boolean => {
    if (!email) {
        return true; // Return true if email is empty
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pattern for validating email
    return emailRegex.test(email); // Return true if email matches the pattern, otherwise false
};

/**
 * Validates a password based on specified criteria:
 * - At least one lowercase letter.
 * - At least one uppercase letter.
 * - At least one digit.
 * - The password length must be between 8 and 20 characters.
 *
 * @param {string} password - The password to be validated.
 * @returns {boolean} Returns `true` if the password is valid, otherwise `false`.
 * 
 * @example
 * validatePassword('Password123'); // Returns true
 * validatePassword('password');    // Returns false
 */
export const validatePassword = (password: string): boolean => {
    if (!password) {
        return true; // Return true if password is empty
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/; // Regex pattern for validating password
    return passwordRegex.test(password); // Return true if password matches the pattern, otherwise false
};
