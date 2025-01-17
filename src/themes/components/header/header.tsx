"use client";
import React from "react";
import styles from "./header.module.scss";
import Icons from "@/themes/icons/icons";
import { Dropdown } from "antd";
import UseAuthenticationServices from "@/modules/authentication/services/authentication-services";
import { useRouter } from "next/navigation";

/**
 * Header component that displays a user avatar and provides a dropdown menu
 * with options like "マイアカウント" (My Account) and "ログアウト" (Logout).
 *
 * It utilizes the `Dropdown` component from Ant Design to display the menu when clicked.
 * The menu items include icons and text in Japanese.
 *
 * @returns {JSX.Element} The rendered Header component.
 */



const Header = () => {
  const router = useRouter();
  
  const handleClick = async (key: string) => {
    if (key === "logout") {
      const response = await UseAuthenticationServices().handleLogout();
      if (response.status) {
        router.push("/");
      }
    }
    if (key === "profile") {
      return;
    }
  };
  const menuItems = [
    {
      key: "profile",
      label: (
        <div className={styles.menuItem}>
          <span className={styles.icon}>{Icons.singleUser}</span>
          <p>マイアカウント</p>
        </div>
      ),
      onClick: () => handleClick("profile"),
    },
    {
      key: "logout",
      label: (
        <div className={styles.menuItem}>
          <span className={styles.icon}>{Icons.logout}</span>
          <p>ログアウト</p>
        </div>
      ),
      onClick: () => handleClick("logout"),
    },
  ];

  return (
    <div className={styles.headerWrapper}>
      <Dropdown
        className={styles.dropDown}
        menu={{
          items: menuItems,
          style: { zIndex: 9999 },
        }}
        trigger={["click"]}
        getPopupContainer={(triggerNode) =>
          triggerNode.parentElement as HTMLElement
        }
      >
        <span className={styles.userAvatar}>{Icons.userAvatar}</span>
      </Dropdown>
    </div>
  );
};

export default Header;
