import React, { useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GymPasses.scss";

const GymPasses = () => {
  const [isEarly, setIsEarly] = useState(false);

  const handlePriceOptions = () => {
    setIsEarly(!isEarly);
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Display 3 items at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets, small laptops)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Small devices (phones)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const prices = [
    {
      type: "Monthly",
      name: "Crossfit",
      price: 120,
      features: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
    },
    {
      type: "Monthly",
      name: "Open Gym",
      price: 120,
      features: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
    },
  ];
  return (
    <div className="gympasses wrapper">
      <h1 className="gympasses__heading">Our Gym Passes</h1>
      <div className="gympasses__options">
        <label>
          <span className="gympasses__options__monthly">Monthly </span>
          <span className="gympasses__options__early">/ Early</span>
        </label>
        <input type="checkbox" />
      </div>

      <div className="gympasses__slider"></div>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      Next
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      Prev
    </div>
  );
};

export default GymPasses;
