import { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🏠 Dashboard Hafalan</h1>
      <p className={styles.time}>{time.toLocaleTimeString('id-ID')}</p>

      <div className={styles.statsGrid}>
        <div className={styles.card}>
          <h3>Juz Dihafal</h3>
          <p className={styles.bigNumber}>12</p>
          <span>Juz</span>
        </div>
        <div className={styles.card}>
          <h3>Surah Tamat</h3>
          <p className={styles.bigNumber}>45</p>
          <span>Surah</span>
        </div>
        <div className={styles.card}>
          <h3>Streak</h3>
          <p className={styles.bigNumber}>18</p>
          <span>Hari</span>
        </div>
        <div className={styles.card}>
          <h3>Target Hari Ini</h3>
          <p className={styles.bigNumber}>3</p>
          <span>Halaman</span>
        </div>
      </div>

      <div className={styles.weatherCard}>
        <h3>🌤️ Cuaca Semangat</h3>
        <div className={styles.weatherContent}>
          <span className={styles.weatherEmoji}>☀️</span>
          <div>
            <p className={styles.temp}>32°C</p>
            <p className={styles.location}>Jakarta - Cerah Berawan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;