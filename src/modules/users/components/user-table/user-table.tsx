"use client";
import React from "react";
import { Spin, Table, Tooltip } from "antd";
import styles from "./user-table.module.scss";
import { UsersData } from "@/interfaces/dashboard/users";
import { LoadingOutlined } from "@ant-design/icons";

/**
 * Props for the UserTable component.
 *
 * @interface UserTableProps
 * @property {boolean} [loading] - Optional flag to show loading state (default is false).
 * @property {UsersData[]} data - Array of user data to be displayed in the table.
 */
interface UserTableProps {
  loading?: boolean; // Flag to indicate loading state
  data: UsersData[]; // Array of user data to populate the table
}

// Define the columns for the table
const columns = [
  {
    title: "No.",
    key: "no",
    render: (_: any, __: any, index: number) => (
      <span>{(index + 1).toString().padStart(2, "0") + "."}</span> // Auto-generated and formatted as "01."
    ),
  },
  {
    title: "ニックネーム",
    dataIndex: "nickname",
    key: "nickname",
    render: (text: string) => (
      <Tooltip title={text}>
        <span>{text}</span>
      </Tooltip>
    ),
  },
  {
    title: "メールアドレス",
    dataIndex: "email",
    key: "email",
    render: (text: string) => (
      <Tooltip title={text}>
        <span>{text.length > 20 ? `${text.slice(0, 20)}...` : text}</span>
      </Tooltip>
    ),
  },
  {
    title: "生年月",
    dataIndex: "birthMonth",
    key: "birthMonth",
    render: (text: string) => (
      <Tooltip title={text}>
        <span>{text}</span>
      </Tooltip>
    ),
  },
  {
    title: "性別",
    dataIndex: "gender",
    key: "gender",
    render: (text: string) => (
      <Tooltip title={text}>
        <span>{text}</span>
      </Tooltip>
    ),
  },
  {
    title: "居住地",
    dataIndex: "location",
    key: "location",
    render: (text: string) => (
      <Tooltip title={text}>
        <span>{text}</span>
      </Tooltip>
    ),
  },
  {
    title: "登録日",
    dataIndex: "registrationDate",
    key: "registrationDate",
    render: (text: string) => (
      <Tooltip title={text}>
        <span>{text}</span>
      </Tooltip>
    ),
  },
];

/**
 * A functional component that renders a table displaying user data.
 * The table includes various user details such as nickname, email, gender, and more.
 * 
 * @param {UserTableProps} props - The props for the component.
 * @returns {JSX.Element} - The rendered user table.
 */
const UserTable: React.FC<UserTableProps> = ({ data, loading = false }) => {
  return (
    <div className="p-6">
      <Table
        columns={columns} // Table column configuration
        dataSource={data} // Data to be displayed in the table
        pagination={{ pageSize: 10 }} // Set pagination size to 10 rows per page
        bordered={false} // Disable table borders
        rowKey="key" // Set unique key for each row
        className={styles.customTable} // Apply custom table styles
        locale={{
          emptyText: "表示するデータがありません", // Customize empty data message
        }}
        loading={{
          spinning: loading, // Show loading spinner based on `loading` state
          indicator: (
            <div className="custom-loading-indicator">
              <Spin
                indicator={
                  <LoadingOutlined
                    style={{ fontSize: 48, color: "orange" }}
                    spin
                  />
                }
              />
            </div>
          ), // Custom loading indicator component
          delay: 500, // Optional delay in ms before showing the loading indicator
          style: { padding: 20, display: loading ? "block" : "none" }, // Control visibility of the loading spinner
        }}
      />
    </div>
  );
};

export default UserTable;
