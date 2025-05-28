import { useState } from 'react'
import Weather from './Components/Weather.jsx'
import Navbar from './Components/Navbar.jsx' 
import NavbarExtension from './Components/Navbar-Extension.jsx'


function App() {
  const [count, setCount] = useState(0)
// precipitation,clouds, pressure, temperature and wind 41.0316005lat
//21.3302511lon
// app.get('/weather', (req, res) => {
//   const query = `
//     SELECT 
//       city, 
//       DATE_FORMAT(date, '%Y-%m-%d') AS date,
//       TIME_FORMAT(time, '%H:%i') AS time,
//       humidity,
//       pressure,
//       wind_speed,
//       temperature,
//       weather_type
//     FROM weather_data
//     ORDER BY date DESC, time DESC
//     LIMIT 16
//   `;

//   db.query(query, (err, results) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json(results);
//   });
// });

  return (
    <>
      <Navbar/>
      <NavbarExtension/>
      <Weather/>
      
    </>
  )
}

export default App
