"use client";
import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.scss";
import DataCard from "../components/data-card/data-card";
import DataChartWrapper from "../components/data-chart-wrapper/data-chart-wrapper";
import { DashboardServicesData } from "@/interfaces/dashboard/dashboard";
import UseDashboardServices from "../services/dashboard-services";

/**
 * The Dashboard component is responsible for displaying the main dashboard UI.
 * It fetches the dashboard data using the `UseDashboardServices` hook and displays
 * the data in the form of multiple `DataCard` components and a `DataChartWrapper`.
 * 
 * @returns {JSX.Element} - The rendered dashboard UI with data cards and charts.
 */
const Dashboard = () => {
  // State to store the dashboard data fetched from the server
  const [dashboardData, setDashBoardData] = useState<DashboardServicesData>();

  /**
   * Fetches the dashboard data from the server using the `UseDashboardServices` hook.
   * The data is then stored in the component state.
   */
  const fetchData = async () => {
    try {
      const response = await UseDashboardServices().fetchDashboardData();
      setDashBoardData(response.data); // Update state with the fetched data
    } catch (error) {
      console.error(error); // Log any errors during data fetch
    }
  };

  // Effect hook to fetch dashboard data on component mount
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className={styles.dashboardWrapper}>
      {/* Cards at the top */}
      <div className={styles.cardsTop}>
        {/* Data cards displaying different dashboard metrics */}
        <DataCard
          cardType="totalUsers"
          mainData={dashboardData?.totalUsers.mainData}
          subData={dashboardData?.totalUsers.subData}
          netPercentage={dashboardData?.totalUsers.netPercentage}
          netStatus={dashboardData?.totalUsers.netStatus}
        />
        <DataCard
          cardType="activeUsers"
          mainData={dashboardData?.activeUsers.mainData}
          subData={dashboardData?.activeUsers.subData}
          netPercentage={dashboardData?.activeUsers.netPercentage}
          netStatus={dashboardData?.activeUsers.netStatus}
        />
        <DataCard
          cardType="retentionRate"
          mainData={dashboardData?.retentionRate.mainData}
          subData={dashboardData?.retentionRate.subData}
          netPercentage={dashboardData?.retentionRate.netPercentage}
          netStatus={dashboardData?.retentionRate.netStatus}
        />
        <DataCard
          cardType="averageSearches"
          mainData={dashboardData?.averageSearches.mainData}
          subData={dashboardData?.averageSearches.subData}
          netPercentage={dashboardData?.averageSearches.netPercentage}
          netStatus={dashboardData?.averageSearches.netStatus}
        />
        {/* Data chart wrapper to display charts */}
        <DataChartWrapper />
        <DataCard
          cardType="lotteryUses"
          mainData={dashboardData?.lotteryUses.mainData}
          subData={dashboardData?.lotteryUses.subData}
          netPercentage={dashboardData?.lotteryUses.netPercentage}
          netStatus={dashboardData?.lotteryUses.netStatus}
        />
        <DataCard
          cardType="accountDeletions"
          mainData={dashboardData?.accountDeletions.mainData}
          subData={dashboardData?.accountDeletions.subData}
          netPercentage={dashboardData?.accountDeletions.netPercentage}
          netStatus={dashboardData?.accountDeletions.netStatus}
        />
      </div>
    </div>
  );
};

export default Dashboard;
