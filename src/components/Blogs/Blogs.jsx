import React from "react";

import "./Blogs.scss";

import Slider from "react-slick";
import { FiArrowUpRight } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

// Slider images
import background from "./bg.jpg";
import background2 from "./bg2.jpg";
import background3 from "./bg3.jpg";

const Blogs = () => {
  const blogsList = [
    {
      area: "New Zone",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non vero cupiditate facilis eligendi?",
      image: background,
    },
    {
      area: "New Zone",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non vero cupiditate facilis eligendi?",
      image: background2,
    },
    {
      area: "New Zone",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non vero cupiditate facilis eligendi?",
      image: background3,
    },
  ];

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
        breakpoint: 1200, // Large screen (laptop and above)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Medium devices (tablets, small laptops)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Small devices (phones)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="blog__container">
      <div className="blog wrapper">
        <h1 className="blog__heading">Blog & News</h1>
        <p className="blog__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          animi libero suscipit aut, earum doloremque consequuntur iusto
          adipisci, eaque ipsa atque. Molestias, quia!
        </p>
        <div className="sliders__container">
          <Slider {...settings}>
            {blogsList.map((blog, idx) => (
              <div key={idx} className="blog__slider">
                <div className="blog__slider__image">
                  <img
                    src={blog.image}
                    alt=""
                    className="blog__slider__image__img"
                  />
                </div>

                <button className="blog__slider__button">{blog.area}</button>
                <p className="blog__slider__paragraph">{blog.description}</p>
                <div className="blog__slider__info">
                  <button>Read More</button>
                  <span>
                    <FiArrowUpRight size={20} />
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <div className="next-arrow" onClick={onClick}>
    <MdKeyboardArrowRight size={20} />
  </div>
);
const PrevArrow = ({ onClick }) => (
  <div className="prev-arrow" onClick={onClick}>
    <MdKeyboardArrowLeft size={25} />
  </div>
);

export default Blogs;
