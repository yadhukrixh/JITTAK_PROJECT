"use client";
import React, { useState } from 'react';
import styles from './data-chart-wrapper.module.scss';
import DataChart from '../data-chart/data-chart';
import MonthNavigator from '../month-navigator/month-navigator';

/**
 * DataChartWrapper component that serves as a container for the data chart and date picker.
 * 
 * This component includes:
 * - A header displaying the title "性別・年代比" (Gender and Age Ratio).
 * - A date picker component (`MonthNavigator`) for selecting the date.
 * - A chart component (`DataChart`) that visualizes the demographic data.
 * 
 * The selected date from the date picker is stored in the `date` state, but the `date` is not currently being passed or used in the chart component.
 * 
 * @returns A JSX element containing the chart wrapper, title, and month navigator.
 */
const DataChartWrapper = () => {
  // Declare state to hold the selected date from the MonthNavigator component
  const [date, setDate] = useState<string>();

  return (
    <div className={styles.dataChartWrapper}>
      {/* Heading section with the title and date picker */}
      <div className={styles.heading}>
        <h2>性別・年代比</h2> {/* Title for the chart */}
        <div className={styles.datePicker}>
          {/* MonthNavigator component for selecting the date */}
          <MonthNavigator setChoosenDate={setDate} />
        </div>
      </div>

      {/* DataChart component for rendering the stacked bar chart */}
      <>
        <DataChart />
      </>
    </div>
  );
};

export default DataChartWrapper;
