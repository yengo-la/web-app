import './Navbar-Extension.css';
import { useState } from 'react';
import searchPng from '../assets/search.svg';

const NavbarExtension = () => {
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    


    return(
        <div className='navbar-extension'>
            <div className='inputBar'>
                <img src={searchPng} alt="" />
                <input type="text" placeholder='this doesnt work sry'/>
            </div>
            <div></div>

        </div>
    )
}

export default NavbarExtension;

<svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path transform="translate(3 3)" d="M7.186 13.554c-3.462 0-6.303-2.869-6.303-6.359C.883 3.681 3.724.837 7.186.837c3.437 0 6.278 2.844 6.278 6.358 0 3.49-2.865 6.359-6.278 6.359zm5.323-1.602a7.176 7.176 0 0 0 1.815-4.757c0-3.968-3.2-7.195-7.138-7.195C3.223 0 0 3.227 0 7.195c0 3.944 3.223 7.171 7.186 7.171a7.058 7.058 0 0 0 4.75-1.84L17.427 18l.573-.55-5.49-5.498z"></path></svg>