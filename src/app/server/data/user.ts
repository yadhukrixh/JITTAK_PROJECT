/**
 * Array of user objects representing system users.
 * 
 * This array contains a list of users for the system. Each user has an email 
 * and a password associated with their account.
 * 
 * Each object in the array represents a user with the following properties:
 * 
 * @typedef {Object} User
 * @property {string} email - The email address of the user (e.g., "user.s12345@allright.com").
 * @property {string} password - The password associated with the user's account (e.g., "Password1234").
 * 
 * @example
 * // Example of a user object
 * {
 *   email: "admin.s12345@allright.com",
 *   password: "Password1234"
 * }
 * 
 */
export const Users = [
    {
        email: "admin.s12345@allright.com",
        password: "Password1234",
    },
    {
        email: "user.s12345@allright.com",
        password: "Password1234",
    },
    {
        email: "superadmin.s12345@allright.com",
        password: "Admin1234",
    }
];
