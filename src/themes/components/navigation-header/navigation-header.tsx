import React from 'react';
import styles from './navigation-header.module.scss';
import Icons from '@/themes/icons/icons';

/**
 * NavigationHeader component that displays a horizontal logo.
 * 
 * @component
 * @example
 * <NavigationHeader />
 * 
 * @returns {JSX.Element} A navigation header containing the logo.
 */
const NavigationHeader = () => {
  return (
    <div className={styles.navigationHeaderWrapper}>
      <span>{Icons.logoHorizontal}</span> {/* Display the horizontal logo */}
    </div>
  );
};

export default NavigationHeader;
