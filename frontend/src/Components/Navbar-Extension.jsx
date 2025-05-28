import './Navbar-Extension.css';
import { useState } from 'react';
import searchPng from '../assets/search.svg';

const NavbarExtension = () => {

    const [cityInput, setCityInput] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);

    return(
        <div className='navbar-extension'>
            <div className='inputBar'>
                <img src={searchPng} alt="" />
                <input type="text"  placeholder='Search your City, Zip Code or Address.' />
            </div>


        </div>
    )
}


export default NavbarExtension;

