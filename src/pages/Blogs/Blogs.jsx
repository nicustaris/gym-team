import React from "react";

import "./Blogs.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FiArrowUpRight } from "react-icons/fi";

import blogsImg from "./blogs_img.jpg";

const Blog = () => {
  const topposts = new Array(5).fill();
  const blogsList = new Array(5).fill();
  return (
    <>
      <div className="blogs">
        <Navbar />
        <div className="blogs__container">
          <div className="blogs__header">
            <div className="blogs__header__section wrapper">
              <h1>Blog</h1>
              <span>Home / Blog</span>
            </div>
          </div>
          <div className="blogs__content wrapper">
            <div className="blogs__sidebar">
              <input type="text" placeholder="Search..." />
              <div className="blogs__categories">
                <h3>Categories</h3>
                <div className="blogs__categories__list">
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
              <div className="blogs__topposts">
                <h3>Top posts</h3>
                {topposts.map((_, i) => (
                  <div className="blogs__topposts__list">
                    <ul>
                      <li>
                        <div className="blogs__topposts__item">
                          <span className="blogs__topposts__itemnumber">
                            {i + 1}
                          </span>
                          <div className="blogs__topposts__details">
                            <span className="blogs__topposts__title">
                              Lorem ipsum dolor sit amet consectetur
                              adipisicing.
                            </span>
                            <div className="blogs__topposts__meta">
                              <span className="blogs__topposts__category">
                                Food Travel -{" "}
                              </span>
                              <span className="blogs__topposts__date">
                                Aug 24, 2024
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="blogs__posts">
              <div className="blogs__posts__container">
                {blogsList.map((blog) => (
                  <div className="blogs__posts__item">
                    <div className="blogs__posts__image">
                      <img src={blogsImg} />
                    </div>
                    <div className="blogs__posts__content">
                      <h1>Testing the Elements</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi sed delectus quasi consequuntur dignissimos
                        rerum sit quibusdam consequatur perferendis recusandae,
                        sequi adipisci, porro perspiciatis quia voluptatum ut
                        omnis iste excepturi vel tempora beatae. Accusamus quasi
                        autem sunt rerum quas aliquam animi exercitationem!
                        Magni soluta fuga, corporis omnis consequuntur
                        voluptates atque!
                      </p>
                      <div className="blogs__posts__content__meta">
                        <span>August 31, 2024</span>
                        <span>4 comments</span>
                        <span>Sub Category</span>
                      </div>
                      <div className="blogs__posts__content__link">
                        <button>Read More</button>
                        <span>
                          <FiArrowUpRight size={20} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="blogs__posts__pagination"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
