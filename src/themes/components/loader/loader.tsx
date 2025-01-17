"use client";
import React, { useEffect, useState } from "react";
import styles from "./loader.module.scss";
import Icons from "@/themes/icons/icons";

/**
 * Loader component displays a loading spinner or logo until the content is fully loaded.
 * It simulates loading behavior by waiting for a set amount of time (1 second) before rendering its children.
 * 
 * @component
 * @example
 * <Loader>
 *   <div>Your content here</div>
 * </Loader>
 * 
 * @param {React.ReactNode} children - The content to display once loading is complete.
 * 
 * @returns {JSX.Element} A loader spinner or logo while content is loading, followed by the children once loaded.
 */
const Loader = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  /**
   * Effect hook to simulate loading behavior.
   * After 1 second, the `isLoaded` state is set to true, indicating that content is ready to be displayed.
   */
  useEffect(() => {
    // Simulate loading behavior (e.g., 1 second)
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoaded ? (
        children // Render children once loading is complete
      ) : (
        <div className={styles.loaderWrapper}>
          <span className={styles.logo}>{Icons.logo}</span> {/* Display logo as the loader */}
        </div>
      )}
    </>
  );
};

export default Loader;
