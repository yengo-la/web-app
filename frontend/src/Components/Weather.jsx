import { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard.jsx';
// use both

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [weatherData25, setWeatherData25] = useState([]);
  const [message, setMessage] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);


  // FETCH
  const fetchWeatherData = async () => {
    try {
      const res = await axios.get('http://localhost:3001/weather');
      setWeatherData(res.data);
    } catch (err) {
      console.error('Error fetching weather:', err);
    }
  };

  const fetchWeatherData25 = async () => {
    try {
      const res = await axios.get('http://localhost:3001/weather/twentyfive');
      setWeatherData25(res.data);
    } catch (err) {
      console.error('Error fetching weather >25:', err);
    }
  };
  // END OF FETCH

  useEffect(() => {
    fetchWeatherData();
    fetchWeatherData25();
  }, []);

  const handleClick = async (city) => {
    try {
      const res = await axios.post('http://localhost:3001/fetch-weather', { city });
      setMessage(res.data.message);
      setSelectedCity(city);
      // refetch
      await fetchWeatherData();
      await fetchWeatherData25();
    } catch (err) {
      setMessage(err.response?.data?.error || 'Something went wrong');
    }
  };

  const filteredData = weatherData.filter(item => item.city === selectedCity);
  const filteredData25 = weatherData25.filter(item => item.city === selectedCity);

  return (
    <div className="weather">
      <div className="buttons">
        <button onClick={() => handleClick('Bitola')}>Bitola</button>
        <button onClick={() => handleClick('Skopje')}>Skopje</button>
        <button onClick={() => handleClick('Prilep')}>Prilep</button>
      </div>
      <hr/>

      {message && <p className="message">{message}</p>}

      {selectedCity && (
        <>
          {filteredData25.map((item, index) => (
            <WeatherCard key={`25-${index}`} item={item} className="weather-container25" />
          ))}
          {filteredData.map((item, index) => (
            <WeatherCard key={`all-${index}`} item={item} className="weather-container" />
          ))}
        </>
      )}
    </div>
  );
};

export default Weather;