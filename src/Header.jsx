// src/components/Header.jsx
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">study<span className="accent-text">Space</span></h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/home " className="active">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><Link to="/dashboard" >Dashboard</Link></li>
            <li><a href="#">Rooms</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Profile</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <Link to="/signup" className="btn-getstarted">Get Started</Link>
      </div>
    </header>
  );
};

export default Header;
