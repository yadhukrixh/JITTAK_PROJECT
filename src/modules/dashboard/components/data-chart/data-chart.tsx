"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from "./data-chart.module.scss";

// Register necessary components for the Chart.js library
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

/**
 * DataChart component that renders a stacked bar chart to visualize demographic data
 * based on age groups and gender distribution.
 * 
 * The chart displays the distribution of male, female, other, and unspecified responses for each age group.
 * The chart is rendered using Chart.js with stacked bars for a clear comparison of each demographic group.
 * 
 * @returns A JSX element rendering a stacked bar chart with demographic data.
 */
const DataChart = () => {
  // Define age group labels for the x-axis
  const labels = [
    "10代未満",
    "10代",
    "20代",
    "30代",
    "40代",
    "50代",
    "60代",
    "70代",
    "80代",
    "90代以上",
  ];

  // Define the data and datasets for the chart
  const data = {
    labels,
    datasets: [
      {
        label: "男性", // Dataset label for male
        data: [120, 150, 200, 200, 250, 280, 200, 80, 60, 0],
        backgroundColor: "rgb(255, 140, 0)", // Orange color for male
        stack: "Stack 0", // Stack group for male
      },
      {
        label: "女性", // Dataset label for female
        data: [50, 100, 250, 300, 200, 150, 150, 30, 20, 0],
        backgroundColor: "rgb(255, 180, 0)", // Yellow color for female
        stack: "Stack 0", // Stack group for female
      },
      {
        label: "その他", // Dataset label for other responses
        data: [30, 80, 150, 200, 300, 150, 100, 20, 30, 0],
        backgroundColor: "rgb(255, 220, 180)", // Light yellow color for other
        stack: "Stack 0", // Stack group for other
      },
      {
        label: "回答なし", // Dataset label for no response
        data: [20, 50, 100, 150, 100, 100, 50, 10, 10, 0],
        backgroundColor: "rgb(255, 235, 220)", // Light beige color for no response
        stack: "Stack 0", // Stack group for no response
      },
    ],
  };

  // Define options for customizing the chart appearance and behavior
  const options = {
    responsive: true, // Enable responsive resizing
    maintainAspectRatio: false, // Allow aspect ratio to be adjusted
    plugins: {
      legend: {
        position: "bottom" as const, // Position legend at the bottom
        align: "start" as const, // Align legend to the start
        labels: {
          padding: 20, // Add padding around legend labels
          font: {
            size: 10, // Set font size for legend labels
          },
          generateLabels: function (chart: any) {
            // Customize legend labels to display dataset labels and colors
            const datasets = chart.data.datasets;
            return datasets.map((dataset: any, i: number) => ({
              text: dataset.label, // Display the dataset label
              fillStyle: dataset.backgroundColor, // Set the fill color to match dataset
              strokeStyle: dataset.backgroundColor, // Set stroke color to match dataset
              lineWidth: 0,
              hidden: !chart.isDatasetVisible(i),
              index: i,
              width: 8, // Set legend box width
              height: 8, // Set legend box height
            }));
          },
          boxWidth: 8, // Set width of the legend box
          boxHeight: 8, // Set height of the legend box
        },
      },
      title: {
        display: false, // Disable chart title display
      },
      tooltip: {
        backgroundColor: 'white', // Set tooltip background color to white
        titleColor: 'black', // Set tooltip title color to black
        bodyColor: 'black', // Set tooltip body text color to black
        callbacks: {
          label: function (context: any) {
            // Customize the tooltip label to include the dataset label and the value in '人' (people)
            return `${context.dataset.label}: ${context.raw}人`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true, // Stack bars on the x-axis
        grid: {
          display: false, // Hide grid lines on the x-axis
        },
        border: {
          display: false, // Hide border on the x-axis
        },
        ticks: {
          font: {
            size: 8, // Set font size for x-axis labels
          },
          rotation: 0, // Ensure x-axis labels are not rotated
        },
      },
      y: {
        stacked: true, // Stack bars on the y-axis
        position: "left" as const, // Set y-axis position to the left
        max: 1000, // Set maximum value for the y-axis
        ticks: {
          stepSize: 100, // Set the step size for y-axis ticks
          font: {
            size: 12, // Set font size for y-axis labels
          },
        },
        grid: {
          color: "#DFDAD4", // Set grid color
          lineWidth: 0.3, // Set grid line width
        },
        border: {
          display: false, // Hide border on the y-axis
        },
      },
    },
  };

  return (
    <div className={styles.chart}>
      {/* Render the Bar chart component with the provided data and options */}
      <Bar options={options} data={data} />
    </div>
  );
};

export default DataChart;
