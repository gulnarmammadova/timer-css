import React, { useState, useEffect } from 'react';
import styles from './digitalclock.module.css';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.clockContainer}>
      <p className={styles.clockTime}>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default DigitalClock;
