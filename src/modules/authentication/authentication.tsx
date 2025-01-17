"use client";
import React, { useState } from "react";
import styles from "./authentication.module.scss";
import Login from "./components/login/login";
import ForgotPassword from "./components/forgot-password/forgot-password";

/**
 * Authentication component that manages the display of the login and forgot password screens.
 * 
 * This component toggles between the Login and ForgotPassword components based on the state of `showLogin`.
 * The initial view is the login screen, and it switches to the forgot password screen when needed.
 * 
 * @returns A component that renders either the Login or ForgotPassword component.
 */
const Authentication = () => {
  // State to track which screen (Login or ForgotPassword) should be displayed
  const [showLogin, setShowLogin] = useState<boolean>(true);

  return (
    <div className={styles.authenticationWrapper}>
      {/* Conditionally renders the Login or ForgotPassword component */}
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <ForgotPassword setShow={setShowLogin} />}
    </div>
  );
};

export default Authentication;
