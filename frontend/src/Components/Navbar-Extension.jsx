import './Navbar-Extension.css';
import { useState } from 'react';
import searchPng from '../assets/search.svg';

const NavbarExtension = () => {

    const [cityInput, setCityInput] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);

    return(
        <div className='navbar-extension'>
        </div>
    )
}


export default NavbarExtension;

