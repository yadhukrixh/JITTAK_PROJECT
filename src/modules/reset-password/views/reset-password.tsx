"use client";
import React, { useEffect, useState } from "react";
import styles from "./reset-password.module.scss";
import ButtonComponent from "@/themes/components/button-component/button-component";
import InputComponent from "@/themes/components/input-component/input-component";
import { validatePassword } from "@/utils/authentication-utils/validation";
import { delay } from "@/utils/common-utils/utils";
import UseAuthenticationServices from "@/modules/authentication/services/authentication-services";
import { message } from "antd";
import { useRouter } from "next/navigation";

/**
 * ResetPassword component allows the user to set or reset their password.
 * It validates the password format, checks if the passwords match, and submits the new password to the backend.
 *
 * @returns {JSX.Element} - The rendered reset password form with input fields and submit button.
 */
const ResetPassword = () => {
  // State variables to manage password and form errors
  const [resetPassword, setResetPassword] = useState<string>(); // Stores the new password entered by the user
  const [confirmPassword, setConfirmPassword] = useState<string>(); // Stores the confirmation password
  const [passwordError, setPasswordError] = useState<string>(); // Stores the error message if the password is invalid
  const [passwordMatch, setPasswordMatch] = useState<boolean>(false); // Boolean to check if passwords match
  const [loading, setLoading] = useState<boolean>(false); // State to manage loading state during submission

  // Router instance for navigation
  const router = useRouter();

  /**
   * Validates the entered password according to the defined rules.
   * If the password is valid, it clears the error; otherwise, sets an error message.
   *
   * @param {string} password - The password to be validated.
   */
  const handleValidatePassword = (password: string) => {
    if (validatePassword(password)) {
      setPasswordError(undefined);
    } else {
      setPasswordError(
        "半角大文字・小文字・数字を含めた8文字以上20文字以内で入力してください"
      );
    }
  };

  /**
   * Checks if the entered password and confirmation password match.
   *
   * @param {string} password - The new password entered by the user.
   * @param {string} confirmPassword - The confirmation password entered by the user.
   */
  const handlePasswordMatch = (password: string, confirmPassword: string) => {
    if (password === confirmPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  // Effect hook to validate the password whenever the resetPassword changes
  useEffect(() => {
    handleValidatePassword(resetPassword!);
  }, [resetPassword]);

  // Effect hook to check if the passwords match whenever the confirmPassword changes
  useEffect(() => {
    handlePasswordMatch(resetPassword!, confirmPassword!);
  }, [confirmPassword]);

  /**
   * Submits the new password and confirmation password to the backend for processing.
   * It also handles loading state and displays success or error messages.
   *
   * @param {string} resetPassword - The new password entered by the user.
   * @param {string} confirmPassword - The confirmation password entered by the user.
   */
  const handleSubmitNewPassword = async (
    resetPassword: string,
    confirmPassword: string
  ) => {
    setLoading(true); // Set loading state to true during the submission
    try {
      await delay(1000); // Simulate network delay
      const response = await UseAuthenticationServices().handleResetPassword(
        resetPassword,
        confirmPassword
      );
      if (response.status) {
        message.success(response.message).then(() => [
          router.push('/'), // Redirect to the home page on success
        ]);
      } else {
        message.error(response.message); // Display error message if submission fails
      }
      setLoading(false); // Set loading state to false after the response
    } catch (error) {
      setLoading(false); // Set loading state to false in case of an error
      console.log(error); // Log any errors that occur during submission
    }
  };

  return (
    <div className={styles.resetPasswordWrapper}>
      <div className={styles.heading}>
        <h2>パスワード設定</h2>
        <p>
          パスワードを入力後 [設定ボタン] を押してサービスの
          利用を開始してください。
        </p>
      </div>

      <div className={styles.resetPasswordForm}>
        <div className={styles.inputField}>
          <h3>パスワード</h3>
          <InputComponent
            value={resetPassword}
            onChange={setResetPassword}
            placeholder="Enter new password"
            type="password"
            showEyeToggle={true}
            status={passwordError ? "error" : undefined}
          />
          {passwordError ? (
            <p className={styles.error}>{passwordError}</p>
          ) : (
            <p className={styles.passwordRequirements}>
              半角大文字・小文字・数字を含めた8文字以上20文字以内
            </p>
          )}
        </div>
        <div className={styles.inputField}>
          <h3>パスワード確認用</h3>
          <InputComponent
            value={confirmPassword}
            onChange={setConfirmPassword}
            type="password"
            placeholder="Enter new password again"
            showEyeToggle={true}
          />
          {!passwordMatch && confirmPassword && (
            <p className={styles.error}>パスワードが一致していません</p>
          )}
        </div>
        <ButtonComponent
          label="ログイン"
          onClick={() => {
            handleSubmitNewPassword(resetPassword!, confirmPassword!);
          }}
          disabled={
            !passwordMatch ||
            !!passwordError ||
            !confirmPassword ||
            !resetPassword
          }
          loading={loading}
        />
      </div>
    </div>
  );
};

// Configure message notifications (position, duration, container)
message.config({
  top: '80vh', // Position the message at 80% from the top of the screen
  duration: 3, // Set the duration for the message
  getContainer: () => document.body, // Render the message on the body
});

export default ResetPassword;
