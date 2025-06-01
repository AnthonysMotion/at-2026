// src/components/Navbar.js
import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="logo-link">
            <img src={process.env.PUBLIC_URL + "/img/logo_black.png"} alt="Logo" className='nav-logo' />
            </Link>
            <div className="nav-links">
                <Link to="/">Design</Link>
                <Link to="/">Photography</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
