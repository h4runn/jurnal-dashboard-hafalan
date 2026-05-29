import styles from './MainWeatherCard.module.css';

const MainWeatherCard = ({ currentCity }) => {
  const { name, country, temp, condition, icon, alerts } = currentCity;

  return (
    <section className={styles.heroCard}>
      <div className={styles.mainInfo}>
        <div>
          <h2 className={styles.locationName}>{name}</h2>
          <p className={styles.locationCountry}>{country}</p>
        </div>
        <div className={styles.conditionBox}>
          <span className={styles.pulseIcon}>{icon}</span>
          <span className={styles.conditionText}>{condition}</span>
        </div>
      </div>

      <div className={styles.tempDisplay}>
        <h1 className={styles.degreeNumber}>{temp}</h1>
        <span className={styles.degreeSymbol}>°C</span>
      </div>

      {/* Conditional Rendering Alert Bahaya Cuaca */}
      {alerts && (
        <div className={styles.alertBar}>
          <span className={styles.alertIcon}>⚠️</span>
          <p className={styles.alertText}>{alerts}</p>
        </div>
      )}
    </section>
  );
};

export default MainWeatherCard;