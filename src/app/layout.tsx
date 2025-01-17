/**
 * RootLayout Component
 * 
 * This component serves as the layout for the root of the application, wrapping the entire app
 * and applying global styles, font, and metadata. It also ensures that the content is displayed
 * only when fully loaded by utilizing React's `Suspense` and a custom loader component.
 * 
 * @param {React.ReactNode} children - The child components or elements to be rendered inside the layout.
 * 
 * @returns {JSX.Element} The rendered layout that includes the HTML structure, global styles, font, and 
 *                        a `Suspense` wrapper around the loader.
 * 
 * @example
 * // The RootLayout component is typically used to wrap the app's content in a Next.js project.
 * <RootLayout>
 *   <AppContent />
 * </RootLayout>
 */

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react"; // Import Suspense
import "../themes/styles/globals.scss";
import Loader from "@/themes/components/loader/loader";

// Define metadata for the page
export const metadata: Metadata = {
  title: "Project",
};

// Load the font locally
const geistSans = localFont({
  src: "../themes/fonts/NotoSansJP-Medium.ttf",
  variable: "--font-japanese",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        {/* Wrap your children with Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <Loader>{children}</Loader>
        </Suspense>
      </body>
    </html>
  );
}
