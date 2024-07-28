import React from "react";

import "./Blogs.scss";

import Slider from "react-slick";
import { FiArrowUpRight } from "react-icons/fi";
import background from "./bg.jpg";

const Blogs = () => {
  const blogs = [
    {
      area: "",
      description: "",
    },
  ];
  return (
    <div className="blog wrapper">
      <h1 className="blog__heading">Blog & News</h1>
      <p className="blog__text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
        animi libero suscipit aut, earum doloremque consequuntur iusto adipisci,
        eaque ipsa atque. Molestias, quia!
      </p>
      <div className="blog__slider">
        <img src={background} alt="" className="blog__slider__img" />
        <button className="blog__slider__button">New Zone</button>
        <p className="blog__slider__paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non vero
          cupiditate facilis eligendi?
        </p>
        <div className="blog__slider__info">
          <button>Read More</button>
          <span>
            <FiArrowUpRight size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
