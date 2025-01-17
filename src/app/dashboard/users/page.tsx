/**
 * Page Component for rendering the Users view.
 * 
 * This component serves as the entry point for the users page in the application.
 * It imports and renders the `Users` component, which is responsible for displaying
 * the users list and related functionality.
 * 
 * @returns {React.ReactElement} - The rendered `Users` component wrapped in a div.
 */
import Users from '@/modules/users/views/users';
import React from 'react';

/**
 * A functional component that returns the Users view.
 *
 * This page component is responsible for rendering the `Users` component, which handles
 * the user interface and logic for displaying users.
 * 
 * @component
 * @example
 * return <Users />;
 * 
 * @returns {JSX.Element} The rendered `Users` component wrapped in a div.
 */
function page() {
  return (
    <div><Users /></div>
  );
}

export default page;
