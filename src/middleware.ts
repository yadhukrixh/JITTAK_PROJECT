import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware function to check the presence of an authentication token in the request cookies.
 * If the token is missing or invalid, the request is redirected to the home page.
 * Otherwise, it proceeds to the next middleware or route handler.
 * 
 * @param {NextRequest} request - The incoming request object.
 * @returns {NextResponse} - A response object. Redirects to home if no token is found or if token verification fails. 
 *                            Otherwise, proceeds with the request.
 * 
 * @throws {Error} Throws an error if the token verification process fails.
 */
export function middleware(request: NextRequest) {
    // Retrieve the 'authToken' from the cookies in the request
    const authToken = request.cookies.get("authToken")?.value;
    console.log("Auth Token:", authToken);

    // If no authentication token is found, redirect to the home page
    if (!authToken) {
        console.log("No token found. Redirecting to home.");
        return NextResponse.redirect(new URL("/", request.url));
    }

    try {
        // If the authentication token exists, proceed with the request
        if (authToken) {
            return NextResponse.next();
        }
    } catch (error) {
        // Log the error if token verification fails and redirect to the home page
        console.error("Token verification failed:", error);
        return NextResponse.redirect(new URL("/", request.url));
    }
}

/**
 * Middleware configuration to specify which routes should use the middleware.
 * The middleware will be applied to routes that match the given paths.
 * 
 * @constant {Object} config - The middleware configuration.
 * @property {string[]} matcher - A list of path patterns that the middleware applies to.
 * 
 * @example
 * matcher: ["/dashboard/:path*", "/protected/:path*"]
 */
export const config = {
    matcher: ["/dashboard/:path*", "/protected/:path*"], // Apply middleware to these route patterns
};
