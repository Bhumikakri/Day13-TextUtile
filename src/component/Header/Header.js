import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header=()=>{
    return(
        <div className="Header">
            <nav className="leftNavbar">
                <h1><Link to="/" style={{textDecoration:"none"}} >📝 TextUtils</Link></h1>
                <ul>
                    <li><Link to="/" style={{textDecoration:"none", color:"black"}}>Home</Link></li>
                    <li><Link to="/About" style={{textDecoration:"none"}}>About Us</Link></li>
                    <li><Link to="/Contact" style={{textDecoration:"none"}}>Contact</Link></li>
                </ul>
            </nav>
            <nav className="rightNavbar">
                
            </nav>
        </div>

    );
}

export default Header;