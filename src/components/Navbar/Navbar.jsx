import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

import "./Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {}, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar wrapper">
        <h2>GYMTEAM</h2>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="navbar__icons__container">
          <div className="search_icon">
            <CiSearch size={21} />
          </div>
          <CiMail size={21} />
          {!isMenuOpen ? (
            <RxHamburgerMenu
              size={21}
              onClick={toggleMenu}
              className="navbar__icons__container__hamburgerMenu"
            />
          ) : (
            <MdClose
              size={21}
              onClick={toggleMenu}
              className="navbar__icons__container__hamburgerMenuClose"
            />
          )}
        </div>

        {isMenuOpen && (
          <div className="navbar__overlay">
            <span>hey</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
