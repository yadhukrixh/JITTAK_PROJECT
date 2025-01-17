"use client";
import React from "react";
import styles from "./search-bar.module.scss";
import Icons from "@/themes/icons/icons";
import { Input } from "antd";

/**
 * Props for the SearchBar component.
 * 
 * @interface SearchBarProps
 * @property {string} value - The current value of the search input.
 * @property {(query: string) => void} onChange - Callback function to handle changes in the input value.
 */
interface SearchBarProps {
  value: string; // Current search query value
  onChange: (query: string) => void; // Function to handle changes to the search query
}

/**
 * A functional component that renders a search bar.
 * The search bar includes an icon and an input field for searching by nickname or email address.
 * 
 * @param {SearchBarProps} props - The props for the component.
 * @returns {JSX.Element} - The rendered search bar.
 */
const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  /**
   * Handles changes in the input field and invokes the `onChange` callback.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event for the input field.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value); // Passes the new input value to the parent component
  };

  return (
    <div className={styles.searchBar}>
      <span>{Icons.search}</span> {/* Display search icon */}
      <Input
        value={value} // The current value of the search input
        onChange={handleInputChange} // Event handler for input field change
        placeholder="ニックネーム / メールアドレスで検索" // Placeholder text in Japanese
        className={styles.searchInput} // Apply custom CSS class for styling
      />
    </div>
  );
};

export default SearchBar;
