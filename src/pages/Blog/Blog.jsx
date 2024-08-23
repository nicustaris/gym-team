import React from "react";

import "./Blog.scss";
import Navbar from "../../components/Navbar/Navbar";

const Blog = () => {
  return (
    <div className="blog">
      <Navbar />
      <div className="blog__container">
        <div className="blog__header">
          <div className="blog__header__section wrapper">
            <h1>Blog</h1>
            <span>Home / Blog</span>
          </div>
        </div>
        <div className="blog__content wrapper">
          <div className="blog__sidebar">
            <input type="text" placeholder="Search..." />
            <div className="blog__categories">
              <h3>Categories</h3>
              <div className="blog__categories__list">
                <ul>
                  <li>Culture</li>
                  <li>Creativity</li>
                  <li>Food</li>
                  <li>Travel</li>
                  <li>Humor</li>
                  <li>Music</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="blog__posts">2</div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
