"use client";
import Icons from "@/themes/icons/icons";
import React, { useEffect, useState } from "react";
import styles from "./month-navigator.module.scss";

/**
 * MonthNavigator component for selecting a month and year. It displays the current month and year with buttons
 * to navigate to the previous or next month.
 * 
 * The component allows the user to change the displayed month and year, and it updates the chosen date, 
 * which is passed to the parent component via the `setChoosenDate` callback function.
 * 
 * @param {Function} setChoosenDate - A callback function to update the selected date (in "YYYY-MM" format).
 * 
 * @returns {JSX.Element} The rendered component displaying the current month and year with navigation buttons.
 */
interface DatePickerProps {
  setChoosenDate: (date: string) => void; // Callback function to pass the selected date
}

const MonthNavigator: React.FC<DatePickerProps> = ({ setChoosenDate }) => {
  // State to hold the current date, year, and month
  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState<string>();
  const [month, setMonth] = useState<string>();

  /**
   * Formats the month and year from the given date and updates the state.
   * It also passes the selected date (in "YYYY-MM" format) to the parent component.
   * 
   * @param {Date} date - The date to extract the month and year from.
   */
  const formatMonthYear = (date: Date) => {
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "2-digit" });
    setYear(year.toString());
    setMonth(month);
    setChoosenDate(`${year}-${month}`); // Passing the selected date to the parent component
  };

  /**
   * Handles the month change by navigating to the previous or next month.
   * 
   * @param {"prev" | "next"} direction - The direction of navigation ("prev" for previous month, "next" for next month).
   */
  const handleMonthChange = (direction: "prev" | "next") => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + (direction === "next" ? 1 : -1)); // Adjust the month
      formatMonthYear(newDate); // Update the year and month
      return newDate;
    });
  };

  // Initialize the year and month on component mount
  useEffect(() => {
    formatMonthYear(date);
  }, []); // Empty dependency array ensures it runs only on component mount

  return (
    <div className={styles.monthNavigator}>
      {/* Display the current year */}
      {year}年
      <div className={styles.month}>
        {/* Button to navigate to the previous month */}
        <button
          onClick={() => handleMonthChange("prev")}
          className={styles.navigationButtonLeft}
        >
          {Icons.arowLeft} {/* Left arrow icon */}
        </button>
        {/* Display the current month */}
        <span className="text-xl font-normal">{month}月</span>
        {/* Button to navigate to the next month */}
        <button
          onClick={() => handleMonthChange("next")}
          className={styles.navigationButtonRight}
        >
          {Icons.arowRight} {/* Right arrow icon */}
        </button>
      </div>
    </div>
  );
};

export default MonthNavigator;
