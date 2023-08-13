import React from 'react';
import styles from "./Navigation.css";

const Navigation = () => {
  return (
    <nav className={styles['navigation']}>
      <div className="logo">
        <img src="/images/logo.png" alt="do some coding logo" style={{ width: '60px', height: 'auto' }} />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
