import React, { useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GiConfirmed } from "react-icons/gi";

import "./GymPasses.scss";

const GymPasses = () => {
  const [isEarly, setIsEarly] = useState(false);

  const handlePriceOptions = () => {
    setIsEarly(!isEarly);
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const subscription = [
    {
      type: "Monthly",
      name: "Crossfit",
      monthlyPrice: 120,
      annualPrice: 1400,
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
      monthlyPrice: 109,
      annualPrice: 1300,
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
          <span className="gympasses__options__early">/ Early!</span>
        </label>
        <input type="checkbox" className="gympasses__options__checkbox" />
        <p>test</p>
      </div>
      <div className="gympasses__slider">
        <Slider {...settings}>
          {subscription.map((data, index) => (
            <div className="gympasses__slider__details">
              <h3>{data?.name}</h3>
              <h1>
                £{data?.monthlyPrice}
                <span>/MO</span>
              </h1>
              <ul>
                {data?.features.map((feature) => (
                  <li>
                    <GiConfirmed style={{ marginRight: "0.5rem" }} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="gympasses__slider__details__button">
                Purchase Now
              </button>
            </div>
          ))}
        </Slider>
        <div className="gympasses__slider__divider"></div>
      </div>
    </div>
  );
};

export default GymPasses;
