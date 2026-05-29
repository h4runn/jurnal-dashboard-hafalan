import styles from './WeatherMetricsGrid.module.css';

const WeatherMetricsGrid = ({ currentCity }) => {
  const { humidity, windSpeed, uvIndex } = currentCity;

  return (
    <section className={styles.gridContainer}>
      {/* Card 1: Kelembaban */}
      <div className={styles.metricCard}>
        <div className={styles.cardHeader}>
          <span className={styles.metricIcon}>💧</span>
          <h4 className={styles.metricTitle}>Kelembaban</h4>
        </div>
        <p className={styles.metricValue}>{humidity}</p>
        <p className={styles.metricSubText}>Kondisi kelembaban udara saat ini.</p>
      </div>

      {/* Card 2: Kecepatan Angin */}
      <div className={styles.metricCard}>
        <div className={styles.cardHeader}>
          <span className={styles.metricIcon}>💨</span>
          <h4 className={styles.metricTitle}>Kecepatan Angin</h4>
        </div>
        <p className={styles.metricValue}>{windSpeed}</p>
        <p className={styles.metricSubText}>Kecepatan hembusan angin wilayah.</p>
      </div>

      {/* Card 3: Indeks UV */}
      <div className={styles.metricCard}>
        <div className={styles.cardHeader}>
          <span className={styles.metricIcon}>☀️</span>
          <h4 className={styles.metricTitle}>Indeks UV</h4>
        </div>
        <p className={styles.metricValue}>{uvIndex}</p>
        <p className={styles.metricSubText}>Paparan radiasi matahari lokal.</p>
      </div>
    </section>
  );
};

export default WeatherMetricsGrid;