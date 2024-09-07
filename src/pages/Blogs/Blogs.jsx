import React, { useEffect, useState } from "react";

import { supabase } from "../../supabaseClient";

import "./Blogs.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

// React icons
import { FiArrowUpRight } from "react-icons/fi";
import { PiSpinnerGap } from "react-icons/pi";

import blogsImg from "./blogs_img.jpg";

const PAGE_SIZE = 3;

const Blog = () => {
  const [blogsList, setBlogsList] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Temporarily
  const topposts = new Array(5).fill();

  const fetchBlogs = async () => {
    const start = page * PAGE_SIZE;
    const end = start + PAGE_SIZE - 1;

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .range(start, end);

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setBlogsList((prevBlogs) => [...prevBlogs, ...data]);
      }

      if (error) throw error;
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 5 &&
        hasMore
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

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
                  <div key={i} className="blogs__topposts__list">
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
                  <div key={blog.id} className="blogs__posts__item">
                    <div className="blogs__posts__image">
                      <img src={blogsImg} />
                    </div>
                    <div className="blogs__posts__content">
                      <h1>{blog.title}</h1>
                      <p>{blog.description}</p>
                      <div className="blogs__posts__content__meta">
                        <span>
                          {new Date(blog.created_at).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </span>
                        <span>{blog.comments} comments</span>
                        <span>{blog.category}</span>
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
                {loading && hasMore && (
                  <PiSpinnerGap className="loading-spinner" />
                )}
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
