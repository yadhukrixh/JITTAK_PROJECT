/**
 * Page Component for rendering the Dashboard.
 * 
 * This component serves as the entry point for the dashboard page in the application.
 * It renders the `Dashboard` component that contains the main content of the dashboard.
 * The component does not take any props or maintain any state, as its only purpose 
 * is to import and render the dashboard view.
 * 
 * @returns {React.ReactElement} - The rendered `Dashboard` component.
 */
import Dashboard from "@/modules/dashboard/views/dashboard";
import React from "react";

/**
 * A functional component that returns the Dashboard view.
 *
 * @component
 * @example
 * return <Dashboard />;
 * 
 * @returns {JSX.Element} The rendered `Dashboard` component.
 */
function page() {
  return <Dashboard />;
}

export default page;
