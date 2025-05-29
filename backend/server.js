const axios = require('axios');
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();
const cron = require('node-cron');

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

app.get('/weather/twentyfive', (req, res) => {
  const query = `
    SELECT 
    city, 
    DATE_FORMAT(date, '%Y-%m-%d') AS date,
    TIME_FORMAT(time, '%H:%i') AS time,
    humidity,
    pressure,
    wind_speed,
    temperature,
    weather_type
    FROM weather_data
    WHERE temperature > 25
    LIMIT 64
  `;

  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.get('/weather', (req, res) => {
  const query = `
    SELECT 
      city, 
      DATE_FORMAT(date, '%Y-%m-%d') AS date,
      TIME_FORMAT(time, '%H:%i') AS time,
      humidity,
      pressure,
      wind_speed,
      temperature,
      weather_type
    FROM weather_data
    LIMIT 64
  `;

  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

async function fetchAndStoreWeather(city) {

    const geocoding = {
        Bitola: { lat: 41.03, lon: 21.33 },
        Skopje: { lat: 41.9981, lon: 21.4254 },
        Prilep: {lat: 41.3444 , lon: 21.5527}
    };

  const coords = geocoding[city];
  if (!coords) throw new Error(`Coordinates for ${city} not found`);

  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}&units=metric`;

  try {

    const res = await axios.get(url);
    const data = res.data;

    const forecast = data.list[0];
    console.log('Forecast count:', data.list.length);
    const weatherData = data.list.slice(0, 16).map(forecast => ({
        city: data.city.name,
        date: forecast.dt_txt.split(' ')[0],
        time: forecast.dt_txt.split(' ')[1].slice(0, 5),
        humidity: forecast.main.humidity,
        pressure: forecast.main.pressure,
        wind_speed: forecast.wind.speed,
        temperature: forecast.main.temp,
        weather_type: forecast.weather[0].icon
    }));


    //INSERT
    const sql = `
      INSERT INTO weather_data 
      (city, date, time, humidity, pressure, wind_speed, temperature, weather_type)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE 
      humidity = VALUES(humidity),
      pressure = VALUES(pressure),
      wind_speed = VALUES(wind_speed),
      temperature = VALUES(temperature),
      weather_type = VALUES(weather_type)
  `;

    for (const entry of weatherData) {
        const values = [
            entry.city,
            entry.date,
            entry.time,
            entry.humidity,
            entry.pressure,
            entry.wind_speed,
            entry.temperature,
            entry.weather_type

        ];

      await new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
          if (err) return reject(err);
          console.log('Inserted:', entry.date, entry.time);
          resolve();
        });
      });
    }


  } catch (err) {
    console.error('Error fetching weather data:', err.response?.data || err.message);
  }
}
app.post('/fetch-weather', async (req, res) => {
  const city = req.body.city;

  if (!city) {
    return res.status(400).json({ error: 'City is required' });
  }

  try {
    await fetchAndStoreWeather(city);
    res.json({ message: `Weather data for ${city} fetched and stored.` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

fetchAndStoreWeather('Bitola');
app.listen(3001, () => {
  console.log('Backend API running at http://localhost:3001');
});
