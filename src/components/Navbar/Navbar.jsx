import React, { useState } from "react";
import "./Navbar.scss";

import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="navbar wrapper">
      <h2>GYMTEAM</h2>
      <nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
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
