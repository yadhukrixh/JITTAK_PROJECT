/**
 * API Route for handling user authentication and setting a session token.
 * 
 * This route handles POST requests for user authentication. It checks if the 
 * provided email exists in the database and if the password matches the stored 
 * value. Upon successful authentication, a token (such as JWT) is generated 
 * and set as a cookie for the client. If the email or password does not match, 
 * an error response is sent.
 * 
 * @param {Request} request - The HTTP request object containing the email 
 * and password for authentication.
 * 
 * @returns {NextResponse} - A response indicating whether the authentication 
 * was successful or not. The response includes a status, message, and a 
 * session token (if successful).
 * 
 * @example
 * // A successful authentication request example
 * {
 *   status: true,
 *   message: "Authentication Successful."
 * }
 * 
 * @example
 * // An error request example due to invalid credentials
 * {
 *   status: false,
 *   message: "パスワード設定に失敗しました。もう一度お試しください。"
 * }
 */
import { NextResponse } from "next/server";
import { Users } from "../../data/user";

export async function POST(request: Request) {
    try {
        // Parse the request body to extract email and password
        const { email, password } = await request.json();

        // Check if the user exists by matching the email
        const user = Users.find((user) => user.email === email);

        // If the user does not exist, return an error message
        if (!user) {
            return NextResponse.json(
                {
                    status: false,
                    message: "パスワード設定に失敗しました。もう一度お試しください。",
                }
            );
        }

        // If the password does not match, return an error message
        if (user.password !== password) {
            return NextResponse.json(
                {
                    status: false,
                    message: "パスワード設定に失敗しました。もう一度お試しください。",
                }
            );
        }

        // Generate a session token (JWT or another method)
        const token = "example_token"; // Replace with a real generated token in a production environment.

        // Create the response and set the authentication token in the cookie
        const response = NextResponse.json(
            {
                status: true,
                message: "Authentication Successful.",
            }
        );

        // Set the authToken in a cookie with appropriate security settings
        response.cookies.set("authToken", token, {
            httpOnly: true, // Prevents JavaScript access to the cookie (increases security)
            secure: true, // Ensures the cookie is sent over HTTPS only
            path: "/", // Cookie available across the entire site
            maxAge: 60 * 60 * 24 * 7, // Cookie expires in 7 days (in seconds)
        });

        // Return the response with the authentication token cookie
        return response;

    } catch (error) {
        // Handle any errors and return a failure response
        return NextResponse.json(
            {
                status: false,
                error: "Failed to connect server.",
            },
            { status: 500 }
        );
    }
}
