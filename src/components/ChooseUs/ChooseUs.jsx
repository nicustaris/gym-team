import React from "react";
import Slider from "react-slick";

import "./ChooseUs.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

import Dumbbell from "./dumbbell.webp";

const ChooseUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 items at a time
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  return (
    <div className="choose__us wrapper">
      <h1>Why Choose Us</h1>
      <div className="choose__us__slider">
        <Slider {...settings}>
          <div className="slide__item__container">
            <div className="slide__item__container__item">
              <img src={Dumbbell} />
              <h3>Slide 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                autem ducimus nemo ad mollitia impedit voluptatum aliquid
                asperiores quia dicta.
              </p>
              <div className="slide__item__container__item__btn">
                <button>LEARN MORE</button>
                <span className="fiarrow">
                  <FiArrowUpRight size={20} />
                </span>
              </div>
            </div>
          </div>

          <div className="slide__item__container">
            <div className="slide__item__container__item">
              <img src={Dumbbell} />
              <h3>Slide 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                autem ducimus nemo ad mollitia impedit voluptatum aliquid
                asperiores quia dicta.
              </p>
              <div className="slide__item__container__item__btn">
                <button>LEARN MORE</button>
                <span className="fiarrow">
                  <FiArrowUpRight size={20} />
                </span>
              </div>
            </div>
          </div>

          <div className="slide__item__container">
            <div className="slide__item__container__item">
              <img src={Dumbbell} />
              <h3>Slide 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                autem ducimus nemo ad mollitia impedit voluptatum aliquid
                asperiores quia dicta.
              </p>
              <div className="slide__item__container__item__btn">
                <button>LEARN MORE</button>
                <span className="fiarrow">
                  <FiArrowUpRight size={20} />
                </span>
              </div>
            </div>
          </div>

          <div className="slide__item__container">
            <div className="slide__item__container__item">
              <img src={Dumbbell} />
              <h3>Slide 4</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                autem ducimus nemo ad mollitia impedit voluptatum aliquid
                asperiores quia dicta.
              </p>
              <div className="slide__item__container__item__btn">
                <button>LEARN MORE</button>
                <span className="fiarrow">
                  <FiArrowUpRight size={20} />
                </span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
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

export default ChooseUs;
