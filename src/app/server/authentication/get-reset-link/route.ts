/**
 * API Route for handling the password reset request.
 * 
 * This route handles POST requests for password reset by checking if the provided 
 * email exists in the user database. If the email is valid and the user exists, 
 * a password reset URL is considered successfully sent, and a success response 
 * is returned. If the email is missing or the user doesn't exist, an error response 
 * is sent instead.
 * 
 * @param {Request} request - The HTTP request object containing the email for 
 * password reset.
 * 
 * @returns {NextResponse} - A response indicating whether the password reset request 
 * was successful or not. The response includes a status and message.
 * 
 * @example
 * // A successful request example
 * {
 *   status: true,
 *   message: "パスワードリセットURLが正常に送信されました"
 * }
 * 
 * @example
 * // An error request example due to missing email
 * {
 *   status: false,
 *   message: "メールアドレスは必須です"
 * }
 */
import { NextResponse } from "next/server";
import { Users } from "../../data/user";

export async function POST(request: Request) {
    try {
        // Parse the request body to extract the email
        const { email } = await request.json();

        // If email is not provided, return an error message
        if (!email) {
            return NextResponse.json(
                {
                    status: false,
                    message: "メールアドレスは必須です",
                }
            );
        }

        // Check if the user exists in the database
        const user = Users.find((user) => user.email === email);
        
        // If the user does not exist, return an error message
        if (!user) {
            return NextResponse.json(
                {
                    status: false,
                    message: "ユーザーが見つかりませんでした。",
                }
            );
        }

        // If the email exists, simulate the sending of a password reset URL
        return NextResponse.json(
            {
                status: true,
                message: "パスワードリセットURLが正常に送信されました",
            }
        );

    } catch (error) {
        // Catch any server errors and return a failure response
        return NextResponse.json(
            {
                status: false,
                message: "Failed to connect server. ",
            },
            { status: 500 }
        );
    }
}
