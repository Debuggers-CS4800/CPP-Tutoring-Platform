import React from 'react';
import About from '../About';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>The Debuggers Team &mdash; 2024</p>
        <div className="social-links">
          <a href="/About">Email</a>
          <a href="/About">LinkedIn</a>
          <a href="/About">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;