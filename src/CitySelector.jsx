import styles from './CitySelector.module.css';

const CitySelector = ({ cities, selectedCityId, onSelectCity }) => {
  return (
    <nav className={styles.navWrapper}>
      {cities.map((city) => {
        const { id, name, country, icon, temp } = city;
        const isActive = selectedCityId === id;
        
        return (
          <button
            key={id}
            className={`${styles.cityTab} ${isActive ? styles.activeTab : ''}`}
            onClick={() => onSelectCity(id)}
          >
            <div className={styles.tabLeft}>
              <span className={styles.tabIcon}>{icon}</span>
              <div style={{ textAlign: 'left' }}>
                <h3 className={styles.cityName}>{name}</h3>
                <p className={styles.cityCountry}>{country}</p>
              </div>
            </div>
            <span className={styles.tabTemp}>{temp}°</span>
          </button>
        );
      })}
    </nav>
  );
};

export default CitySelector;