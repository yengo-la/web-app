import { useState} from 'react'
import Weather from './Components/Weather.jsx'
import Navbar from './Components/Navbar.jsx' 
import NavbarExtension from './Components/Navbar-Extension.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <NavbarExtension/>
      <Weather/>
      
    </>
  )
}

export default App
