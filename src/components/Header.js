import React from 'react';
import './Header.css';

function Header() {
    return (
    <header className="header">
        <img src = "https://www.cpp.edu/engineering/img/branding/eng-two-row-color.png"/>
        <div className="logo">
            CPP-Tutoring Hub
        </div>
        <nav className="nav">
        <a href="#search">Search</a>
        <a href="#about">About</a>
        <a href="#login">Login</a>
        <a href="#help">Help</a>
        </nav>
    </header>
    );
}

export default Header;