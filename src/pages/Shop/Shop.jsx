import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import { FiArrowUpRight } from "react-icons/fi";

import "./Shop.scss";

const Shop = () => {
  return (
    <div className="shop">
      <Navbar />
      <div className="shop__container">
        <h1 className="shop__container__heading">Our Shop</h1>
        <div className="shop__container__redirect">
          <button>Back Home</button>
          <span>
            <FiArrowUpRight size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Shop;
