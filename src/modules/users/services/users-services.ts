import { FetchUsersResponse } from "@/interfaces/dashboard/users";
import axios from "axios";

/**
 * Custom hook for handling user-related API requests.
 * 
 * @returns {Object} - An object containing the function to fetch users.
 */
export default function UseUsersServices() {

    /**
     * Fetches the list of users from the API. Optionally filters the users based on a search query.
     *
     * @param {string} [searchQuery] - Optional search query to filter users by.
     * @returns {Promise<FetchUsersResponse>} - A promise that resolves to the response data containing the status, data, and message.
     * @throws {Error} - Throws an error if the API request fails.
     */
    const fetchUsers = async (searchQuery?: string): Promise<FetchUsersResponse> => {
        try {
            const response = await axios.post("/server/users", { searchQuery });
            return {
                status: response.data.status,
                data: response.data.data,
                message: response.data.message
            };
        } catch (error) {
            throw error; // Rethrow the error in case of failure
        }
    };

    return {
        fetchUsers // Return the function for use in components
    };
}
