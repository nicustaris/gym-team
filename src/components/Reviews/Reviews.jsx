import React, { useRef } from "react";

import "./Reviews.scss";
import profile from "./profile.avif";

import { IoMdQuote } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import Slider from "react-slick";

const Reviews = () => {
  const sliderRef = useRef(null);

  const clientReviews = [
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatibus adipisci consequatur aspernatur dignissimos in.",
      author: "Albert Flores",
      authorTitle: "Profi coach",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatibus adipisci consequatur aspernatur dignissimos in.",
      author: "Albert Flores2",
      authorTitle: "Profi coach",
    },
  ];

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const CustomPrevArrow = () => (
    <div className="custom-prev-arrow" onClick={goToPrev}>
      <IoIosArrowDropleftCircle />
    </div>
  );

  const CustomNextArrow = () => (
    <div className="custom-next-arrow" onClick={goToNext}>
      <IoIosArrowDroprightCircle />
    </div>
  );
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="reviews wrapper">
      <h1>Reviews From Clients</h1>
      <div className="reviews__container">
        <Slider ref={sliderRef} {...settings}>
          {clientReviews.map(({ review, author, authorTitle }, index) => (
            <div key={index} className="reviews__container__slider">
              <div className="reviews__container__slider__header">
                <div className="reviews__container__slider__header__quote">
                  <IoMdQuote />
                </div>
                <div className="reviews__container__slider__header__page">
                  {index + 1}/{clientReviews.length}
                </div>
              </div>
              <div className="reviews__container__slider__review">
                <h3>{review}</h3>
              </div>
              <div className="reviews__container__slider__author">
                <div className="reviews__container__slider__author__profile">
                  <img src={profile} alt="/" />
                  <div className="reviews__container__slider__author__profile__details">
                    <h4>{author}</h4>
                    <p>{authorTitle}</p>
                  </div>
                </div>
                <div className="reviews__container__slider__author__profile__arrows">
                  <CustomPrevArrow />
                  <CustomNextArrow />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
