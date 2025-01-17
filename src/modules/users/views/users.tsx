"use client";
import React, { useEffect, useState } from "react";
import styles from "./users.module.scss";
import SearchBar from "../components/search-bar/search-bar";
import UserTable from "../components/user-table/user-table";
import { UsersData } from "@/interfaces/dashboard/users";
import UseUsersServices from "../services/users-services";

/**
 * Users component to display and manage the list of registered users.
 * 
 * This component fetches user data from the API, allows searching by nickname or email, 
 * and displays the user data in a table format.
 */
const Users: React.FC = () => {
  // State for loading indicator, user data, and search query
  const [loading, setLoading] = useState<boolean>(false); // Loading state for API request
  const [data, setData] = useState<UsersData[]>([]); // Holds the fetched user data
  const [searchQuery, setSearchQuery] = useState<string>(); // Holds the search query

  /**
   * Fetches the user data from the API using the search query.
   * 
   * @param {string} [searchQuery] - The search query to filter the users by nickname or email.
   */
  const handleFetchData = async (searchQuery?: string) => {
    setLoading(true); // Set loading to true when initiating the API call
    try {
      // Fetch data using the user service
      const response = await UseUsersServices().fetchUsers(searchQuery);
      setData(response.data); // Set the fetched data into state
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error(error); // Log any error encountered during the API call
    }
  };

  // Fetch data when the component mounts or the search query changes
  useEffect(() => {
    handleFetchData(searchQuery); // Initial fetch when the component mounts
  }, []);

  useEffect(() => {
    handleFetchData(searchQuery); // Fetch data again when the search query changes
  }, [searchQuery]);

  return (
    <div className={styles.usersWrapper}>
      <div className={styles.header}>
        <h2>登録ユーザー一覧</h2>

        {/* Search bar to input the search query */}
        <SearchBar onChange={setSearchQuery} value={searchQuery!} />
      </div>

      {/* User table to display the user data */}
      <UserTable data={data} loading={loading} />
    </div>
  );
};

export default Users;
