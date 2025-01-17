/**
 * Handles the POST request to fetch active user data with an optional search query.
 * 
 * This function processes an incoming POST request, optionally filtering the list of 
 * active users based on a search query. If no search query is provided, it returns 
 * all active users. If a search query is provided, the function filters the users 
 * by their nickname or email, performing a case-insensitive search.
 * 
 * @param {Request} request - The incoming request object containing the search query.
 * 
 * @returns {NextResponse} A JSON response containing the status, filtered user data (if any), and a message.
 * 
 * @example
 * // Example request body with searchQuery
 * {
 *   searchQuery: "ゆうと"
 * }
 * 
 * @example
 * // Example successful response when searchQuery is provided
 * {
 *   status: true,
 *   data: [
 *     {
 *       key: "1",
 *       nickname: "ゆうと",
 *       email: "example1@example.com",
 *       birthMonth: "1992年 12月",
 *       gender: "男性",
 *       location: "東京都",
 *       registrationDate: "2024年 01月 12日"
 *     }
 *   ],
 *   message: "Data fetched successfully"
 * }
 * 
 * @example
 * // Example successful response when searchQuery is not provided (all users returned)
 * {
 *   status: true,
 *   data: [ ... ], // List of all active users
 *   message: "Data fetched successfully"
 * }
 * 
 * @throws {NextResponse} Returns a `500` status and error message if the server fails to connect.
 */
import { NextResponse } from "next/server";
import { ActiveUsers } from "../data/active-users";

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON body
    const { searchQuery } = await request.json();
    const activeUsers = ActiveUsers;

    if (!searchQuery) {
      return NextResponse.json(
        {
          status: true,
          data: activeUsers,
          message: "Data fetched successfully",
        },
        { status: 200 }
      );
    }

    // Filter users based on search query (case-insensitive)
    const filteredUsers = activeUsers.filter((user) =>
      user.nickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return NextResponse.json(
      {
        status: true,
        data: filteredUsers,
        message: "Data fetched successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: false,
        error: "Failed to connect server.",
      },
      { status: 500 }
    );
  }
}
