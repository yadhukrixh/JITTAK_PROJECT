"use client";
import React, { useEffect, useState } from "react";
import styles from "./login.module.scss";
import InputComponent from "@/themes/components/input-component/input-component";
import ButtonComponent from "@/themes/components/button-component/button-component";
import { validateEmail } from "@/utils/authentication-utils/validation";
import UseAuthenticationServices from "../../services/authentication-services";
import { message } from "antd";
import { delay } from "@/utils/common-utils/utils";
import { useRouter } from "next/navigation";

// Interface for Login component props
interface LoginProps {
  setShowLogin: (status: boolean) => void; // Function to toggle login visibility
}

// Login component for handling user authentication
const Login: React.FC<LoginProps> = ({ setShowLogin }) => {
  const router = useRouter(); // Router hook to navigate on successful login
  const [email, setEmail] = useState<string>(""); // State to store the email
  const [password, setPassword] = useState<string>(""); // State to store the password
  const handleShowLogin = () => setShowLogin(false); // Function to hide the login modal
  const [emailError, setEmailError] = useState<string>(); // State to store email validation errors
  const [loginError, setLoginError] = useState<boolean>(false); // State to store login error status
  const [loading, setLoading] = useState<boolean>(false); // State to track loading status for login request

  /**
   * Validates the email format using a utility function.
   * @param email - The email entered by the user.
   */
  const handleValidateEmail = (email: string) => {
    if (validateEmail(email)) {
      setEmailError(undefined); // Clears email error if valid
    } else {
      setEmailError("有効なメールアドレスを入力してください"); // Sets email error message if invalid
    }
  };

  // Trigger email validation on every email change
  useEffect(() => {
    handleValidateEmail(email);
  }, [email]);

  /**
   * Handles the login request when the user submits their email and password.
   * @param email - The user's email entered during login.
   * @param password - The user's password entered during login.
   */
  const handleLogin = async (email: string, password: string) => {
    setLoading(true); // Show loading indicator during the login process
    try {
      await delay(1000); // Simulate a small delay before making the login request
      const response = await UseAuthenticationServices().handleLogin(email, password); // Calls the authentication service
      if (response.status) {
        // Show success message and redirect on successful login
        message.success(response.message).then(() => {
          router.push("/dashboard/"); // Redirects to the dashboard page
        });
      } else {
        // Show error message on failed login attempt
        message.error(response.message);
        setLoginError(true); // Mark login error as true
      }
      setLoading(false); // Hide loading indicator after response
    } catch (error) {
      setLoading(false); // Hide loading indicator if an error occurs
      console.log(error); // Logs any error to the console
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <h2>ログイン</h2>

      <div className={styles.loginForm}>
        <div className={styles.inputField}>
          <h3>メールアドレス</h3>
          <InputComponent
            value={email} // Binds the email state value
            onChange={setEmail} // Updates the email state on change
            placeholder="Enter your E-mail" // Placeholder text
            type="email" // Specifies input type as email
            status={emailError || loginError ? "error" : undefined} // Adds error status if there are validation errors
          />
          {emailError && <p className={styles.errorMessage}>{emailError}</p>} {/* Displays email error message */}
        </div>
        <div className={styles.inputField}>
          <h3>パスワード</h3>
          <InputComponent
            value={password} // Binds the password state value
            onChange={setPassword} // Updates the password state on change
            type="password" // Specifies input type as password
            placeholder="Enter your password" // Placeholder text
            status={loginError ? "error" : undefined} // Adds error status if login fails
          />
        </div>
        <ButtonComponent
          label="ログイン" // Button label
          onClick={() => { handleLogin(email, password); }} // Handles login on button click
          disabled={
            !email || // Disables button if email is empty
            password.length < 8 || // Disables button if password length is less than 8 characters
            password.length > 20 || // Disables button if password length exceeds 20 characters
            !!emailError // Disables button if there are email validation errors
          }
          loading={loading} // Shows loading spinner if login is in progress
        />
        <span className={styles.forgotPassword} onClick={handleShowLogin}>
          パスワードをお忘れの場合
        </span>
      </div>
    </div>
  );
};

// Configures the message notifications for success and error messages
message.config({
  top: '80vh', // Sets the top margin to move the message container down
  duration: 3, // Duration for the message to be visible
  getContainer: () => document.body, // Ensures message renders on the body element
});

export default Login;
