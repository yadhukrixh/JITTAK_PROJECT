/**
 * Page Component for rendering the Reset Password page layout.
 * 
 * This component serves as the layout for the Reset Password page. It includes the 
 * `NavigationHeader` component at the top of the page and the `ResetPassword` component 
 * for handling password reset functionality.
 * 
 * @returns {JSX.Element} - The rendered page layout with a navigation header and 
 * the reset password form.
 */
import ResetPassword from "@/modules/reset-password/views/reset-password";
import NavigationHeader from "@/themes/components/navigation-header/navigation-header";
import React from "react";
import styles from './reset-password.module.scss';

/**
 * A functional component that renders the Reset Password page layout.
 * 
 * This layout contains the `NavigationHeader` at the top of the page, followed by the
 * `ResetPassword` component, where users can reset their passwords.
 * 
 * @component
 * @example
 * return <page />;
 * 
 * @returns {JSX.Element} The layout consisting of the `NavigationHeader` and 
 * the `ResetPassword` component.
 */
export default function page() {
  return (
    <div style={{ height: "100%" }}>
      <div style={{ position: "absolute", top: "0px", width: "100%" }}>
        <NavigationHeader />
      </div>
      <div className={styles.resetPassword}>
        <ResetPassword />
      </div>
    </div>
  );
}
