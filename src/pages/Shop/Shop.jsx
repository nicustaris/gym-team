import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

import Navbar from "../../components/Navbar/Navbar";

import { FiArrowUpRight } from "react-icons/fi";

import product from "./product.png";

import "./Shop.scss";
import Pagination from "./Pagination";
import Footer from "../../components/Footer/Footer";

const Shop = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [currentPage, setCurrentPage] = useState(1);

  const handleInput = (e) => {
    setMinPrice(e.minValue);
    setMaxPrice(e.maxValue);
  };

  const products = new Array(27).fill("");

  // Pagination logic
  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <div className="shop">
        <Navbar />
        <div className="shop__header wrapper">
          <h1 className="shop__header__heading">Our Shop</h1>
          <div className="shop__header__redirect">
            <button>Back Home</button>
            <span>
              <FiArrowUpRight size={20} />
            </span>
          </div>
        </div>
      </div>
      <div className="shop__page wrapper">
        <div className="shop__page__sidebar">
          <input type="text" placeholder="Search..." />
          <div className="shop__page__sidebar__filter">
            <h3>Filter by price</h3>
            <MultiRangeSlider
              min={0}
              max={500}
              step={5}
              minValue={minPrice}
              maxValue={maxPrice}
              onInput={(e) => {
                handleInput(e);
              }}
            />
            <p>
              Price: £{minPrice} - £{maxPrice}
            </p>
          </div>
          <div className="shop__page__sidebar__categories">
            <h3>Product of categories</h3>
            <ul>
              <li>
                BCAA <span>(3)</span>
              </li>
              <li>
                Gainers <span>(9)</span>
              </li>
              <li>
                Minerals <span>(9)</span>
              </li>
              <li>
                Vitamins <span>(2)</span>
              </li>
              <li>
                Immunity <span>(3)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="shop__page__content">
          <div className="shop__page__content__products">
            {currentProducts.map((_, i) => (
              <div key={i} className="shop__page__content__products__card">
                <img
                  src={product}
                  alt=""
                  className="shop__page__content__products__card__img"
                />
                <span className="shop__page__content__products__card__category">
                  Gainers
                </span>
                <h3 className="shop__page__content__products__card__name">
                  Mega Mass
                </h3>
                <div className="shop__page__content__products__card__price">
                  <span className="old-price">£130</span>
                  <span className="price">£120</span>
                </div>
              </div>
            ))}
          </div>

          <Pagination
            totalProducts={products.length}
            productsPerPage={6}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
