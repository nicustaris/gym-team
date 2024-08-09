import React, { useState } from "react";
import "./Navbar.scss";

import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar wrapper">
      <h2>GYMTEAM</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="navbar__icons__container">
        <div className="search_icon">
          <CiSearch size={21} />
        </div>
        <CiMail size={21} />
        <RxHamburgerMenu size={21} />
      </div>
    </div>
  );
};

export default Navbar;
