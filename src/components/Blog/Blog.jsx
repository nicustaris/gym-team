import React from "react";

import "./Blog.scss";

import Slider from "react-slick";

const Blog = () => {
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
      <div className="blog__slider"></div>
    </div>
  );
};

export default Blog;
