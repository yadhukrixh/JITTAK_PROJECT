/**
 * API Route for handling password reset functionality.
 * 
 * This route handles POST requests for resetting a user's password. It checks
 * if the provided passwords are both valid (not empty) and if the new password 
 * matches the confirmation password. Upon successful password reset, a success 
 * message is returned. If any of the conditions fail, an error message is returned.
 * 
 * @param {Request} request - The HTTP request object containing the new password 
 * and confirmation password for resetting the user's password.
 * 
 * @returns {NextResponse} - A response indicating whether the password reset 
 * was successful or not. The response includes a status, message, and details 
 * about the reset outcome.
 * 
 * @example
 * // A successful password reset request example
 * {
 *   status: true,
 *   message: "パスワードが正常に更新されました。"
 * }
 * 
 * @example
 * // An error request example due to password mismatch
 * {
 *   status: false,
 *   message: "パスワードが一致しません。"
 * }
 */
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        // Parse the request body to extract newPassword and confirmationPassword
        const { newPassword, confirmationPassword } = await request.json();

        // Check if newPassword and confirmationPassword are provided
        if(!newPassword || !confirmationPassword){
            return NextResponse.json(
                {
                    status: false,
                    message: "パスワードが必要です",
                }
            );
        }

        // Ensure that the newPassword matches the confirmationPassword
        if (newPassword !== confirmationPassword) {
            return NextResponse.json(
                {
                    status: false,
                    message: "パスワードが一致しません。",
                }
            );
        }

        // Successfully updated the password
        return NextResponse.json(
            {
                status: true,
                message: "パスワードが正常に更新されました。",
            }
        );

    } catch (error) {
        // Handle any errors and return a failure response
        return NextResponse.json(
            {
                status: false,
                message: "パスワード設定に失敗しました。もう一度お試しください。",
            },
            { status: 500 }
        );
    }
}
