import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

function Header() {
    return (
    <header className="header">
        <img src = "https://www.cpp.edu/engineering/img/branding/eng-two-row-color.png"/>
        <div className="logo">
            CPP-Tutoring Hub
        </div>
        <nav className="nav">
        <Link to="/Home">Home</Link>
        <Link to="/Search">Search</Link>
        <Link to="/About">About</Link>
        <Link to="/Login">Login</Link>
        </nav>
    </header>
    );
}

export default Header;