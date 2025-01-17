import React from "react";
import styles from "./button-component.module.scss";
import { Button } from "antd";

/**
 * CustomButtonProps interface defines the structure for the button component props.
 * 
 * @param {string} label - The text displayed on the button.
 * @param {() => void} onClick - The function to be executed when the button is clicked.
 * @param {boolean} [disabled=false] - A flag to disable the button.
 * @param {boolean} [loading=false] - A flag to show a loading spinner on the button.
 */
interface CustomButtonProps {
  label: string; // Text to be displayed on the button
  onClick: () => void; // Function to be executed on button click
  disabled?: boolean; // Flag to disable the button
  loading?: boolean; // Flag to indicate loading state
}

/**
 * ButtonComponent is a custom button that wraps Ant Design's Button component.
 * It provides an option to display a loading spinner and manage the disabled state.
 * 
 * @component
 * @example
 * <ButtonComponent label="Submit" onClick={handleSubmit} />
 * 
 * @param {CustomButtonProps} props - The properties to configure the button.
 * @returns {JSX.Element} A styled button with optional loading and disabled states.
 */
const ButtonComponent: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  disabled = false,
  loading
}) => {
  return (
    <Button 
      className={styles.button} 
      onClick={onClick} 
      disabled={disabled} 
      loading={loading}
    >
      {/* Show label only if not loading */}
      {!loading && label}
    </Button>
  );
};

export default ButtonComponent;
