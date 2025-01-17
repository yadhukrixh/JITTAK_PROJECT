"use client";
import React from "react";
import styles from "./nav-bar.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { navigateTo, navigationLinks } from "@/utils/dashboard-utils/navigation-utils";
import Icons from "@/themes/icons/icons";

/**
 * NavBar component that renders a navigation bar with links for different routes.
 * It displays a logo and navigation items, highlighting the active item based on the current path.
 * 
 * @component
 * @example
 * <NavBar />
 * 
 * @returns {JSX.Element} A navigation bar with links to different pages.
 */
const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  /**
   * Handles navigation to the specified path by invoking the `navigateTo` utility function.
   * 
   * @param {string} path - The path to navigate to.
   */
  const handleNavigation = (path: string) => {
    navigateTo(path, router.push);
  };

  return (
    <div className={styles.navbarWrapper}>
      <span className={styles.logo}>
        {Icons.logoSmall} {/* Display small logo */}
      </span>

      <div className={styles.navList}>
        {navigationLinks.map((link) => (
          <div
            key={link.path} // Unique key for each navigation item
            className={`${styles.navItem} ${pathname === link.path ? styles.active : ""}`} // Highlight active link
            onClick={() => handleNavigation(link.path)} // Handle navigation on click
          >
            <span>{pathname === link.path ? Icons[link.activeIcon] : Icons[link.defaultIcon]}</span> {/* Display active or default icon */}
            <span>{link.label}</span> {/* Display navigation link label */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
