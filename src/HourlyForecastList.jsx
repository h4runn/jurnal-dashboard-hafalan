import styles from './HourlyForecastList.module.css';

const HourlyForecastList = ({ forecastData }) => {
  return (
    <section className={styles.forecastContainer}>
      <h3 className={styles.sectionTitle}>Perkiraan Per Jam</h3>
      <div className={styles.sliderWrapper}>
        {forecastData.map((hourData, index) => {
          const { time, temp, icon } = hourData;
          
          return (
            <div key={`${time}-${index}`} className={styles.hourlyCard}>
              <span className={styles.hourTime}>{time}</span>
              <span className={styles.hourIcon}>{icon}</span>
              <span className={styles.hourTemp}>{temp}°</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HourlyForecastList;