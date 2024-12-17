import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigationheader.module.css';

function NavigationHeader() {
  return (
    <nav>
      <ul className={styles.navContainer}>
        <li><NavLink className={({isActive}) => isActive ? `active ${styles.navLink}` : styles.navLink} to="/">Saat</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? `active ${styles.navLink}` : styles.navLink} to="/stopwatch">Saniyəölçən</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? `active ${styles.navLink}` : styles.navLink} to="/timer">Taymer</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavigationHeader;
