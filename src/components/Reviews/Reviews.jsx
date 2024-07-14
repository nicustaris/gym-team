import React from "react";

import "./Reviews.scss";
import profile from "./profile.avif";

import { IoMdQuote } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import Slider from "react-slick";

const Reviews = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
  return (
    <div className="reviews wrapper">
      <h1>Reviews From Clients</h1>
      <div className="reviews__container">
        <Slider {...settings}>
          {clientReviews.map(({ review, author, authorTitle }, index) => {
            console.log(index);
            return (
              <div key={index} className="reviews__container__slider">
                <div className="reviews__container__slider__header">
                  <div className="reviews__container__slider__header__quote">
                    <IoMdQuote />
                  </div>
                  <div className="reviews__container__slider__header__page">
                    1/4
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
                    <IoIosArrowDropleftCircle />
                    <IoIosArrowDroprightCircle />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
