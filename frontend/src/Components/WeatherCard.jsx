import React from 'react';
import { allIcons, allWeatherIcons } from '../config/config';
import './Weather.css';

const WeatherCard = ({ item, className }) => (
  <section className={className}>
    <div className="weather-grid">
      <div className="weather-card">
        <div className="date">{item.date || 'N/A'}</div>
        <div className="time">{item.time || 'N/A'}</div>
        <div className="location">{item.city || 'N/A'}</div>
      </div>
      <div className="weather-conditions">
        <div className="humidity-icon">
          <img src={allWeatherIcons.humidity} alt="Humidity" />
          <span>{item.humidity ?? 'N/A'}%</span>
        </div>
        <div className="air-icon">
          <img src={allWeatherIcons.air} alt="Air Pressure" />
          <span>{item.pressure ?? 'N/A'}Pa</span>
        </div>
        <div className="wind-icon">
          <img src={allWeatherIcons.wind} alt="Wind Speed" />
          <span>{item.wind_speed ?? 'N/A'}m/s</span>
        </div>
        <div className="thermometer-icon">
          <img src={allWeatherIcons.thermometer} alt="Temperature" />
          <span>{item.temperature ?? 'N/A'}°C</span>
        </div>
      </div>
      <div className="weather-temperature">
        <div className="icon-temp">
          <img src={allIcons[item.weather_type] || ''} alt="Weather Icon" />
        </div>
      </div>
    </div>
  </section>
);

export default WeatherCard;