import { useState } from 'react';
import './index.css';
import CitySelector from './CitySelector';
import MainWeatherCard from './MainWeatherCard';
import WeatherMetricsGrid from './WeatherMetricsGrid';
import HourlyForecastList from './HourlyForecastList';

const initialCitiesData = [
  {
    id: 1,
    name: 'Jakarta',
    country: 'Indonesia',
    temp: 32,
    condition: 'Hujan Berpetir',
    icon: '⚡',
    humidity: '85%',
    windSpeed: '12 km/h',
    uvIndex: 'Ekstrem',
    hourlyForecast: [
      { time: '12:00', temp: 32, icon: '⚡' },
      { time: '15:00', temp: 30, icon: '🌧️' },
      { time: '18:00', temp: 28, icon: '☁️' },
      { time: '21:00', temp: 27, icon: '✨' }
    ],
    alerts: 'Peringatan: Potensi genangan air di area dataran rendah hingga jam 18:00.'
  },
  {
    id: 2,
    name: 'Tokyo',
    country: 'Jepang',
    temp: 16,
    condition: 'Cerah Berawan',
    icon: '⛅',
    humidity: '45%',
    windSpeed: '18 km/h',
    uvIndex: 'Rendah',
    hourlyForecast: [
      { time: '12:00', temp: 16, icon: '⛅' },
      { time: '15:00', temp: 17, icon: '☀️' },
      { time: '18:00', temp: 14, icon: '🌙' },
      { time: '21:00', temp: 12, icon: '✨' }
    ],
    alerts: ''
  },
  {
    id: 3,
    name: 'London',
    country: 'Britania Raya',
    temp: 11,
    condition: 'Gerimis Berkabut',
    icon: '🌧️',
    humidity: '92%',
    windSpeed: '24 km/h',
    uvIndex: 'Sedang',
    hourlyForecast: [
      { time: '12:00', temp: 11, icon: '🌧️' },
      { time: '15:00', temp: 11, icon: '🌦️' },
      { time: '18:00', temp: 10, icon: '☁️' },
      { time: '21:00', temp: 9, icon: '☁️' }
    ],
    alerts: 'Peringatan Angin Kencang: Waspada ranting pohon patah di jalur publik.'
  }
];

const App = () => {
  // ── STATE ──────────────────────────────────────────────
  const [cities] = useState(initialCitiesData);
  const [selectedCityId, setSelectedCityId] = useState(1);

  // ── DERIVED DATA (.find() Objek Terpilih) ──────────────
  const currentCity = cities.find((city) => city.id === selectedCityId) || cities[0];

  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Sisi Atas / Navigasi Pilihan Kota */}
        <CitySelector 
          cities={cities} 
          selectedCityId={selectedCityId} 
          onSelectCity={setSelectedCityId} 
        />
        
        {/* Layout Grid Dashboard Utama */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.5rem',
        }}>
          {/* Main Hero Card */}
          <MainWeatherCard currentCity={currentCity} />
          
          {/* Detail Metrik Grid */}
          <WeatherMetricsGrid currentCity={currentCity} />
          
          {/* Ramalan Per Jam */}
          <HourlyForecastList forecastData={currentCity.hourlyForecast} />
        </div>
      </div>
    </div>
  );
};

export default App;