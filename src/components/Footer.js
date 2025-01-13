import React from "react";
import '../App.css';
import { FaTwitter, FaTiktok, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          {/* Column 1: Company Info */}
          <div className="footer-column">
            <h4>About Us</h4>
            <p>
              We are committed to delivering the best services to our customers.
              Follow us on social media for updates.
            </p>
          </div>
  
          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
  
          {/* Column 3: Social Media */}
          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com/_tu_niss_/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;