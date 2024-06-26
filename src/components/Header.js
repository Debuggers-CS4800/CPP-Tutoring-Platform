import React from 'react';
import { useState } from 'react';
import './Header.css';
import '../SignUpPage';
import { Link } from 'react-router-dom';
import SignupComponent from '../SignUpPage';

function Header() {
    const [open, setOpen] = useState(false);
    const signup = () => {
        return(null)
    }
    
    return (
    <header className="header">
        <img src = "https://www.cpp.edu/brand/img/thumb-primary-logo-horizontal-stacked.jpg"/>
        <div className="logo">
            CPP-Tutoring Hub
        </div>
            <nav className="nav">
            <a href="#search">Search</a>
            <a href="#about">About</a>
            {/* <Link to= "/SignUpPage">Login</Link> */}
            <a href='#search' onClick={() => setOpen(true)}>Login</a>
            <a href="#help">Help</a>
        </nav>
        <SignupComponent isOpen={open} onClose={() => setOpen(false)}></SignupComponent>
    </header>
    );
}

export default Header;