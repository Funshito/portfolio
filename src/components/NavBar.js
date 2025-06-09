
import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../App.css';

const NavBar = () => {

    const [isMobile, setIsMobile] = useState(false);

  

    return (
        <nav className="navbar">
          <div className="logo"><a href='/'>FUNSHO</a></div>
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className='nav-links'>
            <a href="https://github.com/Funshito" target="_blank">
            <FaGithub size={24} />
            </a>
            <a href="https://www.instagram.com/_tu_niss_/" target="_blank">
            <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/oluwafunsho-alabi/" target="_blank">
            <FaLinkedinIn size={24} />
            </a>
            
          </div>
          <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      );
    };
    
    export default NavBar;