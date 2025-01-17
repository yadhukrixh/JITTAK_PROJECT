import { FetchDashboardResponses } from "@/interfaces/dashboard/dashboard";
import axios from "axios";

/**
 * Custom hook for interacting with the dashboard API to fetch dashboard data.
 * This hook provides the function to fetch the dashboard data and handles the API call.
 * 
 * @returns {Object} - An object containing the `fetchDashboardData` function.
 */
export default function UseDashboardServices() {
    
    /**
     * Fetches data for the dashboard from the server.
     * 
     * This function makes a POST request to the `/server/dashboard` endpoint to retrieve 
     * the dashboard data. The response is expected to contain the status, data, and message 
     * which are then returned in the form of a structured object.
     * 
     * @returns {Promise<FetchDashboardResponses>} - A promise that resolves with the response data
     * containing the status, data, and message.
     * 
     * @throws {Error} - Throws an error if the request fails.
     */
    const fetchDashboardData = async (): Promise<FetchDashboardResponses> => {
        try {
            const response = await axios.post("/server/dashboard");
            return {
                status: response.data.status,
                data: response.data.data,
                message: response.data.message,
            };
        } catch (error) {
            throw error;
        }
    };

    // Return the function to fetch dashboard data
    return {
        fetchDashboardData,
    };
}
