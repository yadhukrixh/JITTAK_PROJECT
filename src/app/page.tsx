import Authentication from "@/modules/authentication/authentication";
import NavigationHeader from "@/themes/components/navigation-header/navigation-header";
import React from "react";

/**
 * Page component that renders the Authentication module along with the NavigationHeader.
 * 
 * This component contains two main sections:
 * 1. A `NavigationHeader` is rendered at the top of the page.
 * 2. An `Authentication` component is rendered below the header.
 * 
 * The `Authentication` component handles user authentication, and the `NavigationHeader` 
 * provides the navigation bar for the page.
 * 
 * @returns JSX.Element - The page component that combines `NavigationHeader` and `Authentication`.
 */
function page() {
  return (
    <div style={{ height: "100%" }}>
      {/* NavigationHeader rendered at the top of the page */}
      <div style={{ position: "absolute", top: "0px", width: "100%" }}>
        <NavigationHeader />
      </div>
      {/* Authentication component rendered below the header */}
      <Authentication />
    </div>
  );
}

export default page;
