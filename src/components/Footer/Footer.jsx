import React from "react";

import "./Footer.scss";

// Social media icons
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer wrapper">
      <div className="footer__logo">
        <h2>GymTeam</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, vitae
          aliquam!
        </p>
        <div className="footer__logo__icons">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaTelegramPlane />
          </span>
          <span>
            <FaInstagram />
          </span>
        </div>
      </div>
      <div className="footer__links">
        <div className="footer__links__section">
          <h4>About</h4>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Vacancy</li>
          </ul>
        </div>
        <div className="footer__links__section">
          <h4>Services</h4>
          <ul>
            <li>How to work</li>
            <li>Works</li>
            <li>Price</li>
          </ul>
        </div>
        <div className="footer__links__section">
          <h4>Support</h4>
          <ul>
            <li>Contact us</li>
            <li>Our channel</li>
            <li>Instagram</li>
            <li>Telegram</li>
          </ul>
        </div>
        <div className="footer__links__section">
          <h4>FAQ</h4>
          <ul>
            <li>Payment</li>
            <li>Monthly pay</li>
            <li>Work time</li>
            <li>More</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
