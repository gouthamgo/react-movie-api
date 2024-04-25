import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';


function Menu() {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item"><a href="/" className="menu-link">Home</a></li>
        <li className="menu-item"><a href="/about" className="menu-link">About</a></li>
        <li className="menu-item"><Link to="/trend" className="menu-link">Trending</Link></li>
        <li className="menu-item"><a href="/portfolio" className="menu-link">Trailers</a></li>
        <li className="menu-item"><a href="/contact" className="menu-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
