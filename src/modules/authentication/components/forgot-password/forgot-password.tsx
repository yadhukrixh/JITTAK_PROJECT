import React, { useEffect, useState } from "react";
import styles from "./forgot-password.module.scss";
import InputComponent from "@/themes/components/input-component/input-component";
import ButtonComponent from "@/themes/components/button-component/button-component";
import { validateEmail } from "@/utils/authentication-utils/validation";
import { delay } from "@/utils/common-utils/utils";
import UseAuthenticationServices from "../../services/authentication-services";
import { message } from "antd";
import { useRouter } from "next/navigation";

/**
 * Props for the ForgotPassword component.
 * 
 * @property {function} setShow - Function to toggle the visibility of the login page.
 */
interface ForgotPasswordProps {
  setShow: (status: boolean) => void;
}

/**
 * ForgotPassword component allowing users to reset their password by entering their email address.
 * 
 * This component includes:
 * - An input field for the user to enter their email address.
 * - A button to submit the email and send a password reset URL.
 * - Email validation and error handling.
 * - A loading state for the request process.
 * 
 * @param {ForgotPasswordProps} props - The props for this component.
 * @returns JSX.Element - The ForgotPassword component JSX structure.
 */
const ForgotPassword: React.FC<ForgotPasswordProps> = ({ setShow }) => {
  const router = useRouter(); //router
  const [email, setEmail] = useState<string>(""); // State for the email input
  const [emailError, setEmailError] = useState<string | undefined>(undefined); // State for email error message
  const [loading, setLoading] = useState<boolean>(false); // State for the loading spinner during the reset URL request

  /**
   * Toggles the visibility of the login page.
   */
  const handleShowLogin = () => setShow(true);

  /**
   * Validates the email input using a helper function.
   * 
   * @param {string} email - The email to be validated.
   */
  const handleValidateEmail = (email: string) => {
    if (validateEmail(email)) {
      setEmailError(undefined);
    } else {
      setEmailError("有効なメールアドレスを入力してください"); // Sets error message for invalid email
    }
  };

  // Trigger email validation on each email change
  useEffect(() => {
    handleValidateEmail(email);
  }, [email]);

  /**
   * Handles the process of sending the reset URL to the user's email.
   * 
   * @param {string} email - The email address to which the reset URL will be sent.
   */
  const handleSentResetUrl = async (email: string) => {
    setLoading(true);
    try {
      await delay(1000); // Simulate delay for demonstration purposes
      const response = await UseAuthenticationServices().handleSendResetUrl(email); // Sends reset URL request
      if (response.status) {
        message.success(response.message).then(()=>{
          router.push('/reset-password'); // Redirects to reset password page
        }); // Displays success message
      } else {
        message.error(response.message); // Displays error message if response fails
      }
      setLoading(false); // Reset loading state after request is complete
    } catch (error) {
      setLoading(false); // Ensure loading state is reset in case of error
      console.log(error); // Log error for debugging purposes
    }
  };

  return (
    <div className={styles.forgotPasswordWrapper}>
      <div className={styles.heading}>
        <h2>パスワード再設定</h2> {/* Password Reset Heading */}
        <p>
          現在使っているメールアドレスを入力してください。パスワード再設定用のURLをメールで送信いたします。
        </p>
      </div>
      <div className={styles.forgotPasswordForm}>
        <div className={styles.inputField}>
          <h3>メールアドレス</h3> {/* Email Field Label */}
          <InputComponent
            value={email} // Binding the value of the email input
            onChange={(value: string) => setEmail(value)} // Updates email state when the input changes
            placeholder="Enter your E-mail" // Placeholder text
            type="email" // Specifies email input type
            status={emailError ? "error" : undefined} // Shows error state if email validation fails
          />
        </div>

        <ButtonComponent
          label="パスワード再設定用URLを送信する" // Button label for sending the reset URL
          onClick={() => { handleSentResetUrl(email) }} // Handles click event to send reset URL
          disabled={!email || !!emailError} // Disables button if email is invalid or empty
          loading={loading} // Shows loading spinner while request is in progress
        />
        <span className={styles.returnToLogin} onClick={handleShowLogin}>
          パスワードをお忘れの場合
        </span> {/* Link to return to the login page */}
      </div>
    </div>
  );
};

export default ForgotPassword;
