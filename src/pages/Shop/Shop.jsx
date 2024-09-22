import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MultiRangeSlider from "multi-range-slider-react";

import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Pagination/Pagination";
import Footer from "../../components/Footer/Footer";

import { FiArrowUpRight } from "react-icons/fi";

import productImg from "./product.png";
import "./Shop.scss";
import { useSelector } from "react-redux";

const Shop = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleInput = (e) => {
    setMinPrice(e.minValue);
    setMaxPrice(e.maxValue);
  };

  const products = [
    { id: 1, name: "Mega Mass", category: "Gainers", price: 120 },
    { id: 2, name: "Protein Power", category: "Gainers", price: 150 },
    { id: 3, name: "Energy Booster", category: "Minerals", price: 90 },
    { id: 4, name: "VitaBoost", category: "Vitamins", price: 45 },
    { id: 5, name: "Immunity Plus", category: "Immunity", price: 70 },
    { id: 6, name: "Muscle Builder", category: "Gainers", price: 130 },
    { id: 7, name: "Mineral Mix", category: "Minerals", price: 80 },
    { id: 8, name: "Vitamin D3", category: "Vitamins", price: 55 },
  ];

  // Pagination logic
  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Filter products based on search query and price range
  const filteredProducts = products
    .filter((product) =>
      product.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    )
    .filter(
      (product) => product.price <= maxPrice && product.price >= minPrice
    );

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="shop">
        <Navbar />
        <div className="shop__header wrapper">
          <h1 className="shop__header__heading">Our Shop</h1>
          <div className="shop__header__redirect">
            <button onClick={handleBackHome}>Back Home</button>
            <span>
              <FiArrowUpRight size={20} />
            </span>
          </div>
        </div>
      </div>
      <div className="shop__page wrapper">
        <div className="shop__page__sidebar">
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
          />
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
            {filteredProducts.length >= 1 ? (
              currentProducts.map((product, i) => (
                <div key={i} className="shop__page__content__products__card">
                  <img
                    src={productImg}
                    alt=""
                    className="shop__page__content__products__card__img"
                  />
                  <span className="shop__page__content__products__card__category">
                    {product.category}
                  </span>
                  <h3 className="shop__page__content__products__card__name">
                    {product.name}
                  </h3>
                  <div className="shop__page__content__products__card__price">
                    <span className="old-price">£130</span>
                    <span className="price">£{product.price}</span>
                  </div>
                </div>
              ))
            ) : (
              <span className="shop__page__content__products__notfound">
                No products were found
              </span>
            )}
          </div>

          <Pagination
            totalProducts={filteredProducts.length}
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
