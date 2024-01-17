import React from 'react';
import './header.css';
import { useDarkMode } from '../DarkModeContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    const changeMode = () => {
        toggleDarkMode();
    }

    return (
        <div className={darkMode ? 'Header' : 'TogleHeader'}>
            <nav className="leftNavbar">
                <h1><Link to="/" style={{ textDecoration: "none", color: "darkblue" }} >📝 TextUtils</Link></h1>
                <ul>
                    <li><Link to="/" style={darkMode ? { textDecoration: "none", color: "black" } : { textDecoration: "none", color: "white" }}>Home</Link></li>
                    <li><Link to="/About" style={{ textDecoration: "none" }}>About Us</Link></li>
                    <li><Link to="/Contact" style={{ textDecoration: "none" }}>Contact</Link></li>
                </ul>
            </nav>
            <nav className="rightNavbar">
                <div className={darkMode ? 'toggle-Light' : 'toggle-dark'}>
                    <div className={darkMode ? 'Toglebtns' : 'Toglebtn'} onClick={changeMode}></div>
                </div>
                <p>Enable {darkMode ? 'Light' : 'Dark'} Mode</p>
            </nav>
        </div>
    );
}

export default Header;
