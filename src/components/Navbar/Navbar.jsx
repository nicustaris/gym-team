import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import AuthModal from "../AuthModal/AuthModal";

// React icons
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { RiShoppingBasketLine } from "react-icons/ri";

import "./Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen((prev) => !prev);

    if (!isUserMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div className={`navbar-wrapper ${isScrolled ? "scrolled" : ""}`}>
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
                to="/blogs"
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
          <div className="navbar__icons__basket">
            <div className="items__count">0</div>
            <RiShoppingBasketLine size={21} />
          </div>

          <CiUser onClick={toggleUserMenu} size={21} />

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
              className={`navbar__icons__container__hamburgerMenuClose ${
                isMenuOpen ? "rotate" : ""
              }`}
            />
          )}
        </div>

        {isMenuOpen && (
          <div className="navbar__overlay">
            <div className="navbar__overlay__content">
              <h5 className="navbar__overlay__title">NAVIGATE</h5>
              <ul className="navbar__overlay__menu">
                <li>
                  <NavLink to="/" onClick={toggleMenu}>
                    <span className="navbar__overlay__menu__number">01</span>
                    <span className="navbar__overlay__menu__text">Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shop" onClick={toggleMenu}>
                    <span className="navbar__overlay__menu__number">02</span>
                    <span className="navbar__overlay__menu__text">Shop</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blogs" onClick={toggleMenu}>
                    <span className="navbar__overlay__menu__number">03</span>
                    <span className="navbar__overlay__menu__text">Blog</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={toggleMenu}>
                    <span className="navbar__overlay__menu__number">04</span>
                    <span className="navbar__overlay__menu__text">Contact</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
        {isUserMenuOpen && (
          <AuthModal
            isUserMenuOpen={isUserMenuOpen}
            setIsUserMenuOpen={setIsUserMenuOpen}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
