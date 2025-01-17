/**
 * API Route for fetching dashboard data.
 * 
 * This route handles POST requests for fetching dashboard data. It processes a 
 * predefined dataset (`dashboardData`) and organizes it into a structured response 
 * format. If the operation is successful, it returns the dashboard data with a 
 * success message. In case of an error, it returns a failure response.
 * 
 * @param {Request} request - The HTTP request object. This request does not require 
 * any specific data, as it fetches predefined data.
 * 
 * @returns {NextResponse} - A response object indicating the success or failure 
 * of the data retrieval. If successful, it returns the dashboard data and a success 
 * message. If an error occurs, a failure message is returned.
 * 
 * @example
 * // A successful response example
 * {
 *   status: true,
 *   data: {
 *     totalUsers: { mainData: "123", subData: "123", netPercentage: "13", netStatus: "up" },
 *     activeUsers: { mainData: "100", subData: "55", netPercentage: "67", netStatus: "down" },
 *     retentionRate: { mainData: "55", subData: "55", netPercentage: "13", netStatus: "up" },
 *     averageSearches: { mainData: "52", subData: "8", netPercentage: "13", netStatus: "up" },
 *     lotteryUses: { mainData: "82", subData: "55", netPercentage: "53", netStatus: "up" },
 *     accountDeletions: { mainData: "55", subData: "8", netPercentage: "3", netStatus: "down" }
 *   },
 *   message: "Dashboard data fetched successfully"
 * }
 * 
 * @example
 * // A failure response example
 * {
 *   status: false,
 *   message: "Server Error."
 * }
 */
import { NextResponse } from "next/server";
import { dashboardData } from "../data/dashboard-data";

export async function POST(request: Request) {
    try {
        // Process and structure the dashboard data into a key-value format
        const dashboardServicesData = dashboardData.reduce((acc, item) => {
            acc[item.label] = {
                mainData: item.maindata,
                subData: item.subdata,
                netPercentage: item.netpercentage,
                netStatus: item.netstatus,
            };
            return acc;
        }, {} as Record<string, any>);

        // Construct the response object
        const response = {
            status: true,
            data: dashboardServicesData,
            message: "Dashboard data fetched successfully",
        };
        // Return the response with a success status
        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        // In case of an error, return a failure response
        return NextResponse.json(
            {
                status: false,
                message: "Server Error.",
            },
            { status: 500 }
        );
    }
}
