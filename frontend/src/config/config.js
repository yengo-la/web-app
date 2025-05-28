import day1 from '../assets/WeatherConditions/01d.png';
import night1 from '../assets/WeatherConditions/01n.png';
import day2 from '../assets/WeatherConditions/02d.png';
import night2 from '../assets/WeatherConditions/02n.png';
import day3 from '../assets/WeatherConditions/03d.png';
import night3 from '../assets/WeatherConditions/03n.png';
import day4 from '../assets/WeatherConditions/04d.png';
import night4 from '../assets/WeatherConditions/04n.png';
import day9 from '../assets/WeatherConditions/09d.png';
import night9 from '../assets/WeatherConditions/09n.png';
import day10 from '../assets/WeatherConditions/10d.png';
import night10 from '../assets/WeatherConditions/10n.png';
import day11 from '../assets/WeatherConditions/11d.png';
import night11 from '../assets/WeatherConditions/11n.png';
import day13 from '../assets/WeatherConditions/13d.png';
import night13 from '../assets/WeatherConditions/13n.png';
import day50 from '../assets/WeatherConditions/50d.png';
import night50 from '../assets/WeatherConditions/50n.png';

import humidity from '../assets/WeatherMain/humidity.png';
import air from '../assets/WeatherMain/air.png';
import thermometer from '../assets/WeatherMain/thermometer.png';
import wind from '../assets/WeatherMain/wind.png';

const allIcons = {
  '01d': day1, '01n': night1,
  '02d': day2, '02n': night2,
  '03d': day3, '03n': night3,
  '04d': day4, '04n': night4,
  '09d': day9, '09n': night9,
  '10d': day10, '10n': night10,
  '11d': day11, '11n': night11,
  '13d': day13, '13n': night13,
  '50d': day50, '50n': night50
};

const allWeatherIcons = {
  humidity,
  air,
  thermometer,
  wind
};

export { allIcons, allWeatherIcons };